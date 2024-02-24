// authentication.ts
import fetch, { Headers } from 'node-fetch';

export class Authentication {
    private authorization: string;
    private a1Data: string;

    constructor() {
        this.authorization = "";
        this.a1Data = "";
    }

    private createRefreshAuthHeaders(): Headers {
        const myHeaders = new Headers();
        myHeaders.append("sec-ch-ua", "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"");
        myHeaders.append("Accept", "application/json, text/plain, */*");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("sec-ch-ua-mobile", "?0");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
        myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
        myHeaders.append("Sec-Fetch-Site", "same-origin");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("host", "www.reserveamerica.com");
        return myHeaders;
    }

    public async refreshAuthToken(): Promise<void> {
        const myHeaders = this.createRefreshAuthHeaders();
        const raw = JSON.stringify({
            "a1Data": {
                "sessionID": "D2161A098859B3901C8656BDBB683906.ue1-prod-aspiraone-web-06",
                "sessionType": "SELFSERVICE",
                "maxInactive": 1800000,
                "AWSALB": "+6PSU7MQPdOSX++1OPOWyUu16atpEoqrWhdOCgsuLgvoni8ephHYZf5NO0p9rT3nnn98dhm2ldJw2624Er7dDuAouZIFY9na7nbHMWS6o/o71ULmgAD+uCDdZ4Nr",
                "AWSALBCORS": "+6PSU7MQPdOSX++1OPOWyUu16atpEoqrWhdOCgsuLgvoni8ephHYZf5NO0p9rT3nnn98dhm2ldJw2624Er7dDuAouZIFY9na7nbHMWS6o/o71ULmgAD+uCDdZ4Nr",
                "date": 1708783517593
            },
            "refreshToken": null
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            // @ts-ignore
            const response = await fetch("https://www.reserveamerica.com/refreshAuth", requestOptions);
            if (!response.ok) {
                throw new Error('Failed to refresh auth token');
            }
            const data = await response.json();
            // @ts-ignore
            this.authorization = data.idToken; // Update this according to the actual JSON response structure
            // @ts-ignore
            this.a1Data = JSON.stringify(data.a1Data); // Update this according to the actual JSON response structure
        } catch (error) {
            console.error('Error refreshing auth token:', error);
            throw error;
        }
    }

    // Getter methods for authorization and a1Data
    public getAuthorization(): string {
        return this.authorization;
    }

    public getA1Data(): string {
        return this.a1Data;
    }
}