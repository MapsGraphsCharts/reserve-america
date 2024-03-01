// campsite.ts
import fetch, { Headers, RequestInit } from 'node-fetch';
import { Authentication } from './authentication'; // Assuming you have an Authentication module as discussed
import { stateCampgroundMap } from './campgroundMap';

interface StateCampgroundMap {
    [state: string]: CampsiteRecord[]; // Change Campground[] to CampsiteRecord[]
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
    records: Array<CampsiteRecord>;
    summary: {
        prdGrpSummary: Array<any>; // Specify the array element type if known
        availabilitySupport: null | any; // Specify the type if known
        atLeastOneSiteAvailable: boolean;
        groupBooking: null | any; // Specify the type if known
    };
    resultsMap: {
        contractCode: string;
        locationID: number;
        svgDefinition: string;
        assets: Array<any>; // Specify the array element type if known
        gisMapInfo: null | any; // Specify the type if known
        // Add other properties here if there are more known properties
    };
    stayEvents: null | any; // Specify the type if known
}

interface CampsiteRecord {
    id: number;
    prodGrpId: number;
    prodInfo: {
        lineOfBusiness: string;
        typeOfUse: string;
        typeOfUseLabel: string;
    };
    prodGrpName: string;
    name: string;
    details: {
        siteCode: string;
        siteIcon: string;
        stayType: string;
        nonSiteSpecific: boolean;
        callCenterReservable: boolean;
        mapAreaId: number;
        loopId: number;
        loopName: string;
        siteGroupId: number;
        siteGroupName: null | string;
        ratesStartingFrom: string;
        rates: {
            nightlyRate: {
                type: string;
                amountDisplay: string;
                amount: number;
            };
            weeklyRate: {
                type: string;
                amountDisplay: string;
                amount: number;
            };
            groupRate: null;
            dynamicRates: null;
        };
        acceptingLotteries: boolean;
        categoriesAttributes: CategoryAttribute[];
        attributes: Attribute[];
        keySiteAttributes: KeySiteAttribute[];
        cta: {
            availabType: string;
            actionType: string;
        };
        flexResult: null;
        detailsInfo: null;
        crossOverURL: null;
        imageURL: string;
        actvAdvInfo: null;
        highDemand: boolean;
        highDemandAlert: null;
        dailyEntry: boolean;
        invModel: null;
        siteDescription: null;
        lobDetails: null;
        hourlyUse: boolean;
        hourlyUseInfo: null;
        associatedSitesInfo: null;
        childSiteRestriction: null;
    };
    reservableType: string;
    available: boolean;
    bookingStatus: string;
    availableSites: number;
    availabilityGrid: AvailabilityGridItem[];
    geolocated: boolean;
    matchedCartItemID: null | number;
}

interface CategoryAttribute {
    categoryID: number;
    categoryLabel: string;
    attributes: Attribute[];
}

interface Attribute {
    id: number;
    name: string;
    description: string | null;
    value: string[];
    displayValue: string[];
    attributeName: string;
    attributeLabel: string | null;
}

interface KeySiteAttribute {
    key: string;
    label: string;
    value: string;
}

interface AvailabilityGridItem {
    date: string;
    inventoryCount: number;
    status: string;
    timeblocks: null; // Assuming this is the correct type based on provided structure
}

interface ExtendedAvailabilityResult {
    campsiteName: string;
    availabilityGrid: AvailabilityGridItem[];
}

interface DemandResult {
    campsiteName: string;
    bookingPercentage: number;
    totalDaysAvailable: number;
    totalDaysReserved: number;
    availabilityGrid: AvailabilityGridItem[];
}

export class Search {



    private auth: Authentication;

    constructor(auth: Authentication) {
        this.auth = auth;
    }

    private createAuthHeaders(): Headers {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", this.auth.getAuthorization());
        myHeaders.append("A1Data", this.auth.getA1Data());
        return myHeaders;
    }

    private isCampsiteDetailsResponse(data: any): data is CampsiteRecord {
        // Validate the data based on the structure of CampsiteDetailsResponse
        // This is a basic example, you should add more checks based on your data structure
        return data && typeof data.totalRecords === 'number' && Array.isArray(data.records);
    }

    public async callApi(state: string, campsiteId: string, rcp: number, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteRecord> {
        await this.auth.refreshAuthToken(); // Ensure auth token is refreshed
        const headers = this.createAuthHeaders();

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

    public async getAllCampsites(campsiteMap: StateCampgroundMap, gad: string, arv: string, lsy: number, displayGISMap: boolean, concurrencyLimit: number = 100): Promise<CampsiteDetailsResponse[]> {
        let allRecords: CampsiteRecord[] = [];

        for (const [state, campgrounds] of Object.entries(campsiteMap)) {
            for (const campground of campgrounds) {
                const campsiteId = campground.campgroundId; // Extract the campgroundId from the object
                const initialResponse = await this.callApi(state, campsiteId, 0, gad, arv, lsy, displayGISMap); // Start from page 1
                allRecords = [...allRecords, ...initialResponse.records];

                const totalPages = initialResponse.totalPages;
                const pagesToFetch = Array.from({ length: totalPages }, (_, i) => i + 1);

                // Process pages in batches
                for (let i = 0; i < pagesToFetch.length; i += concurrencyLimit) {
                    const batch = pagesToFetch.slice(i, i + concurrencyLimit);
                    const fetchBatch = async (batch: number[]) => {
                        const promises = batch.map(page => this.callApi(state, campsiteId, page, gad, arv, lsy, displayGISMap));
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



    public async getCampsiteAvailability(campgroundMap: StateCampgroundMap, startDate: string, durationMonths: number, stayLength: number, displayGISMap: boolean): Promise<ExtendedAvailabilityResult[]> {
        const endDate = this.addMonths(new Date(startDate), durationMonths);
        let currentDate = new Date(startDate);
        let resultsMap: Map<string, AvailabilityGridItem[]> = new Map();

        while (currentDate <= endDate) {
            const formattedDate = this.formatDate(currentDate);
            const blockResults = await this.getAllCampsites(campgroundMap, formattedDate, formattedDate, stayLength, displayGISMap);

            blockResults.forEach((record: CampsiteRecord) => {
                const existingGrid = resultsMap.get(record.name) || [];
                resultsMap.set(record.name, [...existingGrid, ...record.availabilityGrid]);
            });

            currentDate = this.addDays(currentDate, 14); // Assuming fetchAllSearchResultsPaginated handles overlapping dates correctly
        }

        // Convert the map to the desired array format
        const extendedAvailabilityResults: ExtendedAvailabilityResult[] = [];
        resultsMap.forEach((availabilityGrid, campsiteName) => {
            extendedAvailabilityResults.push({ campsiteName, availabilityGrid });
        });

        return extendedAvailabilityResults;
    }

    public async calculateDemand(extendedAvailabilityResults: ExtendedAvailabilityResult[]): Promise<DemandResult[]> {
        return extendedAvailabilityResults.map(extendedAvailabilityResult => {
            let reservedCount = 0;
            let availableCount = 0;

            if (extendedAvailabilityResult.availabilityGrid) {
                extendedAvailabilityResult.availabilityGrid.forEach(gridItem => {
                    if (gridItem.status === 'RESERVED') {
                        reservedCount++;
                    } else if (gridItem.status === 'AVAILABLE') {
                        availableCount++;
                    }
                });
            }

            // Calculate the percentage of time the campsite is booked
            const totalDays = reservedCount + availableCount;
            const bookingPercentage = (reservedCount / totalDays) * 100;

            return {
                campsiteName: extendedAvailabilityResult.campsiteName,
                bookingPercentage,
                totalDaysAvailable: availableCount,
                totalDaysReserved: reservedCount,
                availabilityGrid: extendedAvailabilityResult.availabilityGrid
            };
        });
    }

    public async getTopSitesByDemand(topX: number, campgroundMap: StateCampgroundMap, startDate: string, durationMonths: number, stayLength: number, displayGISMap: boolean): Promise<DemandResult[]> {
        const topSitesByCampground: DemandResult[][] = [];

        for (const [state, campgrounds] of Object.entries(campgroundMap)) {
            for (const campground of campgrounds) {
                const specificCampgroundMap: StateCampgroundMap = { [state]: [campground] };
                const availabilityResults = await this.getCampsiteAvailability(specificCampgroundMap, startDate, durationMonths, stayLength, displayGISMap);
                const demandResults = await this.calculateDemand(availabilityResults);
                const sortedResults = demandResults.sort((a, b) => b.bookingPercentage - a.bookingPercentage);
                topSitesByCampground.push(sortedResults.slice(0, topX));
            }
        }

        return topSitesByCampground.flat();
    }

    public async getWeekendAvailability(demandResults: DemandResult | DemandResult[]): Promise<DemandResult[]> {
        // If demandResults is not an array, convert it to an array
        const demandResultsArray = Array.isArray(demandResults) ? demandResults : [demandResults];

        return demandResultsArray.filter(result => {
            for (let i = 0; i < result.availabilityGrid.length - 2; i++) {
                const firstDay = new Date(result.availabilityGrid[i].date).getDay();
                const secondDayStatus = result.availabilityGrid[i + 1].status;
                const thirdDayStatus = result.availabilityGrid[i + 2].status;

                if (firstDay === 5 && result.availabilityGrid[i].status === 'AVAILABLE' && secondDayStatus === 'AVAILABLE' && thirdDayStatus === 'AVAILABLE') {
                    // Friday-Saturday-Sunday availability
                    return true;
                } else if (firstDay === 6 && secondDayStatus === 'AVAILABLE' && thirdDayStatus === 'AVAILABLE') {
                    // Saturday-Sunday-Monday availability
                    return true;
                }
            }
            return false;
        });
    }

    }

