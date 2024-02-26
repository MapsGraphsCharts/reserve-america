// campsite.ts
import fetch, { Headers } from 'node-fetch';
import { Authentication } from './authentication'; // Assuming you have an Authentication module as discussed

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

    public async fetchCampsiteDetails(state: string, campsiteId: string, rcp: number, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteDetailsResponse> {
        await this.auth.refreshAuthToken(); // Ensure auth token is refreshed
        const headers = this.createHeaders();
        const url = `https://api.reserveamerica.com/jaxrs-json/products/${state}/${campsiteId}?rcp=${rcp}&gad=${gad}&arv=${arv}&lsy=${lsy}&displayGISMap=${displayGISMap}`;
        const requestOptions = {
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
            return result;
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

    public async fetchAllCampsiteDetails(state: string, campsiteId: string, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteRecord[]> {
        let currentPage = 1;
        const allRecords: CampsiteRecord[] = [];

        // Initial fetch to get total pages
        const initialResponse = await this.fetchCampsiteDetails(state, campsiteId, currentPage, gad, arv, lsy, displayGISMap);
        allRecords.push(...initialResponse.records);
        let totalPages = initialResponse.totalPages;

        // Fetch remaining pages
        while (currentPage < totalPages) {
            currentPage++;
            const response = await this.fetchCampsiteDetails(state, campsiteId, currentPage, gad, arv, lsy, displayGISMap);
            allRecords.push(...response.records);
        }

        return allRecords;
    }

    public async fetchAvailableCampsites(state: string, campsiteId: string, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<CampsiteRecord[]> {
        try {
            // Fetch all campsite details
            const allCampsites = await this.fetchAllCampsiteDetails(state, campsiteId, gad, arv, lsy, displayGISMap);

            // Filter for available campsites
            const availableCampsites = allCampsites.filter(campsite => campsite.bookingStatus === "AVAILABLE");

            return availableCampsites;
        } catch (error) {
            console.error('Error fetching available campsites:', error);
            throw error;
        }
    }
}
}