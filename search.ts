// campsite.ts
import fetch, { Headers } from 'node-fetch';
import { Authentication } from './authentication'; // Assuming you have an Authentication module as discussed

// Define the interface for the method parameters
interface CampsiteDetailsParams {
    state: string;
    campsiteId: string;
    rcp: number;
    gad: string;
    arv: string;
    lsy: number;
    displayGISMap: boolean;
}

// Define the interface for the expected response
interface CampsiteDetailsResponse {
    campsiteName: string;
    description: string;
    availability: boolean;
    amenities: string[];
    // Add more fields based on the actual response structure from the API
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

    public async fetchCampsiteDetails(params: CampsiteDetailsParams): Promise<CampsiteDetailsResponse> {
        await this.auth.refreshAuthToken(); // Ensure auth token is refreshed
        const headers = this.createHeaders();
        const { state, campsiteId, rcp, gad, arv, lsy, displayGISMap } = params;
        const url = `https://api.reserveamerica.com/jaxrs-json/products/${state}/${campsiteId}?rcp=${rcp}&gad=${gad}&arv=${arv}&lsy=${lsy}&displayGISMap=${displayGISMap}`;
        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch campsite details');
            }
            const result = await response.json();
            return result; // Ensure this matches the CampsiteDetailsResponse structure
        } catch (error) {
            console.error('Error fetching campsite details:', error);
            throw error;
        }
    }
}
