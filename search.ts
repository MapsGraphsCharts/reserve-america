// campsite.ts
import fetch, { Headers, RequestInit } from 'node-fetch';
import { Authentication } from './authentication'; // Assuming you have an Authentication module as discussed
import { stateCampgroundMap } from './campgroundMap';

interface Campground {
    campgroundId: string;
}

interface CampsiteRecord {
    // Define the properties of CampsiteRecord based on your data structure
    // For example:
    bookingStatus: string;
    // Add other properties as needed...
}

interface StateCampgroundMap {
    [state: string]: Campground[]; // key: state, value: array of Campground objects
}

interface CampsiteDetailsResponse {
    totalRecords: number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    control: {
        currentPage: number;
        pageSize: number;
    };
    records: Array<any>; // Consider defining a more specific type for the objects within this array
    summary: {
        prdGrpSummary: Array<any>; // Define a more specific type if possible
        availabilitySupport: null | any; // Adjust based on actual data
        atLeastOneSiteAvailable: boolean;
        groupBooking: null | any; // Adjust based on actual data
    };
    resultsMap: {
        contractCode: string;
        locationID: number;
        svgDefinition: string;
        assets: Array<any>; // Define a more specific type if possible
        gisMapInfo: null | any; // Adjust based on actual data
    };
    stayEvents: null | any; // Adjust based on actual data
}


export class Search {



    private auth: Authentication;

    constructor(auth: Authentication) {
        this.auth = auth;
    }

    private createHeaders(): Headers {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", this.auth.getAuthorization());
        myHeaders.append("A1Data", this.auth.getA1Data());
        return myHeaders;
    }

    private isCampsiteDetailsResponse(data: any): data is CampsiteDetailsResponse {
        // Validate the data based on the structure of CampsiteDetailsResponse
        // This is a basic example, you should add more checks based on your data structure
        return data && typeof data.totalRecords === 'number' && Array.isArray(data.records);
    }

    public async fetchSingleCampsitePage(state: string, campsiteId: string, rcp: number, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteDetailsResponse> {
        await this.auth.refreshAuthToken(); // Ensure auth token is refreshed
        const headers = this.createHeaders();

        // Construct the URL using URL and URLSearchParams
        const url = new URL(`https://api.reserveamerica.com/jaxrs-json/products/${state}/${campsiteId}`);
        const params = new URLSearchParams({
            rcp: rcp.toString(),
            gad,
            arv,
            lsy: lsy.toString(),
            displayGISMap: displayGISMap.toString()
        });
        url.search = params.toString();

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(url.toString(), requestOptions);
            if (!response.ok) {
                // Handle specific status codes
                if (response.status === 404) {
                    throw new Error(`Campsite not found: ${response.status} ${response.statusText}`);
                } else if (response.status >= 500) {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                } else {
                    throw new Error(`Failed to fetch campsite details: ${response.status} ${response.statusText}`);
                }
            }
            const result = await response.json();
            if (!this.isCampsiteDetailsResponse(result)) {
                throw new Error('Invalid response format');
            }
            return result;
        } catch (error) {
            // Handle network errors separately from API errors
            if (error instanceof TypeError) {
                console.error('Network error:', error);
            } else {
                console.error('Error fetching campsite details:', error);
            }
            throw error; // Rethrow the error if you cannot handle it here
        }
    }

    public async fetchAllCampsiteDetails(campsiteMap: StateCampgroundMap, gad: string, arv: number, lsy: number, displayGISMap: boolean, concurrencyLimit: number = 10): Promise<CampsiteDetailsResponse[]> {
        let allRecords: CampsiteRecord[] = [];

        for (const [state, campgrounds] of Object.entries(campsiteMap)) {
            for (const campground of campgrounds) {
                const campsiteId = campground.campgroundId; // Extract the campgroundId from the object
                const initialResponse = await this.fetchSingleCampsitePage(state, campsiteId, 0, gad, arv, lsy, displayGISMap); // Start from page 1
                allRecords = [...allRecords, ...initialResponse.records];

                const totalPages = initialResponse.totalPages;
                const pagesToFetch = Array.from({ length: totalPages }, (_, i) => i + 1);

                // Process pages in batches
                for (let i = 0; i < pagesToFetch.length; i += concurrencyLimit) {
                    const batch = pagesToFetch.slice(i, i + concurrencyLimit);
                    const fetchBatch = async (batch: number[]) => {
                        const promises = batch.map(page => this.fetchSingleCampsitePage(state, campsiteId, page, gad, arv, lsy, displayGISMap));
                        const results = await Promise.all(promises);
                        results.forEach(result => allRecords.push(...result.records));
                    };
                    await fetchBatch(batch);
                }
            }
        }

        return allRecords;
    }

    private addMonths(date: Date, months: number): Date {
        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }

    private addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private formatDate(date: Date): string {
        // Assuming you want YYYY-MM-DD format
        return date.toISOString().split('T')[0];
    }



    public async fetchExtendedAvailability(campgroundMap: StateCampgroundMap, startDate: string, durationMonths: number, stayLength: number, displayGISMap: boolean): Promise<ExtendedAvailabilityResult[]> {
        const endDate = this.addMonths(new Date(startDate), durationMonths);
        let currentDate = new Date(startDate);
        let results: ExtendedAvailabilityResult[] = [];

        while (currentDate < endDate) {
            const formattedDate = this.formatDate(currentDate);
            const blockResults = await this.fetchAllCampsiteDetails(campgroundMap, formattedDate, formattedDate, stayLength, displayGISMap);
            results = [...results, ...blockResults];
            currentDate = this.addDays(currentDate, 14); // Move to the next 14-day block
        }

        return results;
    }

    public async calculateBookingRate(campgroundId: string, durationMonths: number): Promise<number> {
        const availability = await fetchExtendedAvailability({campgroundId}, "2024-05-20", durationMonths, 5, true);
        let reservedDays = 0;
        let totalDays = 0;

        availability.forEach(day => {
            totalDays++;
            if (day.status === "RESERVED") {
                reservedDays++;
            }
        });

        return (reservedDays / totalDays) * 100; // Return the booking rate as a percentage
    }

    public async fetchAvailableCampsites(campsiteMap: StateCampgroundMap, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteRecord[]> {
        try {
            // Fetch all campsite details
            const allCampsites = await this.fetchAllCampsiteDetails(campsiteMap, gad, arv, lsy, displayGISMap);

            // Filter for available campsites
            const availableCampsites = allCampsites.filter(campsite => campsite.bookingStatus === "AVAILABLE");

            return availableCampsites;
        } catch (error) {
            console.error('Error fetching available campsites:', error);
            throw error;
        }
    }



}