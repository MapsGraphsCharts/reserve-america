var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// campsite.ts
import fetch, { Headers } from 'node-fetch';
export class Search {
    constructor(auth) {
        this.auth = auth;
    }
    createHeaders() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", this.auth.getAuthorization());
        myHeaders.append("A1Data", this.auth.getA1Data());
        return myHeaders;
    }
    fetchCampsiteDetails(state, campsiteId, rcp, gad, arv, lsy, displayGISMap) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.auth.refreshAuthToken(); // Ensure auth token is refreshed
            const headers = this.createHeaders();
            const url = `https://api.reserveamerica.com/jaxrs-json/products/${state}/${campsiteId}?rcp=${rcp}&gad=${gad}&arv=${arv}&lsy=${lsy}&displayGISMap=${displayGISMap}`;
            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            };
            try {
                const response = yield fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`Failed to fetch campsite details: ${response.status} ${response.statusText}`);
                }
                const result = yield response.json();
                return result;
            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    console.error('Error parsing JSON:', error);
                }
                else if (error instanceof TypeError) {
                    console.error('Network error:', error);
                }
                else {
                    console.error('Error fetching campsite details:', error);
                }
                throw error; // Rethrow the error if you cannot handle it here
            }
        });
    }
    fetchAllCampsiteDetails(state, campsiteId, gad, arv, lsy, displayGISMap) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentPage = 1;
            const allRecords = [];
            // Initial fetch to get total pages
            const initialResponse = yield this.fetchCampsiteDetails(state, campsiteId, currentPage, gad, arv, lsy, displayGISMap);
            allRecords.push(...initialResponse.records);
            let totalPages = initialResponse.totalPages;
            // Fetch remaining pages
            while (currentPage < totalPages) {
                currentPage++;
                const response = yield this.fetchCampsiteDetails(state, campsiteId, currentPage, gad, arv, lsy, displayGISMap);
                allRecords.push(...response.records);
            }
            return allRecords;
        });
    }
    fetchAvailableCampsites(state, campsiteId, gad, arv, lsy, displayGISMap) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch all campsite details
                const allCampsites = yield this.fetchAllCampsiteDetails(state, campsiteId, gad, arv, lsy, displayGISMap);
                // Filter for available campsites
                const availableCampsites = allCampsites.filter(campsite => campsite.bookingStatus === "AVAILABLE");
                return availableCampsites;
            }
            catch (error) {
                console.error('Error fetching available campsites:', error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=search.js.map