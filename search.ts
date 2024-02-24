// campsite.ts
import fetch, { Headers } from 'node-fetch';
import { Authentication } from './authentication'; // Assuming you have an Authentication module as discussed

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

    public async fetchCampsiteDetails(campsiteId: string, rcp: number, gad: string, arv: string, lsy: number, displayGISMap: boolean): Promise<any> {
        await this.auth.refreshAuthToken(); // Ensure auth token is refreshed
        const headers = this.createHeaders();
        const url = `https://api.reserveamerica.com/jaxrs-json/products/NY/${campsiteId}?rcp=${rcp}&gad=${gad}&arv=${arv}&lsy=${lsy}&displayGISMap=${displayGISMap}`;
        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        try {
            // @ts-ignore
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch campsite details');
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching campsite details:', error);
            throw error;
        }
    }
}