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
        const url = `https://api.reserveamerica.com/jaxrs-json/products/${state}/${campsiteId}?rcp=${rcp}&gad=${gad}&arv=${arv}&lsy=${lsy}&displayGISMap=${displayGISMap}`;
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch campsite details: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            if (!this.isCampsiteDetailsResponse(result)) {
                throw new Error('Invalid response format');
            }
            return result as CampsiteDetailsResponse;
        } catch (error) {
            if (error instanceof SyntaxError) {
                console.error('Error parsing JSON:', error);
            } else if (error instanceof TypeError) {
                console.error('Network error:', error);
            } else {
                console.error('Error fetching campsite details:', error);
            }
            throw error; // Rethrow the error if you cannot handle it here
        }
    }

    public async fetchAllCampsiteDetails(campsiteMap: StateCampgroundMap, gad: string, arv: string, lsy: number, displayGISMap: boolean, concurrencyLimit: number = 10): Promise<CampsiteRecord[]> {
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