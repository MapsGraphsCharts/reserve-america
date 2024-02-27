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
    isCampsiteDetailsResponse(data) {
        // Validate the data based on the structure of CampsiteDetailsResponse
        // This is a basic example, you should add more checks based on your data structure
        return data && typeof data.totalRecords === 'number' && Array.isArray(data.records);
    }
    fetchSingleCampsitePage(state, campsiteId, rcp, gad, arv, lsy, displayGISMap) {
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
                if (!this.isCampsiteDetailsResponse(result)) {
                    throw new Error('Invalid response format');
                }
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
    fetchAllCampsiteDetails(campsiteMap, gad, arv, lsy, displayGISMap, concurrencyLimit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let allRecords = [];
            for (const [state, campgrounds] of Object.entries(campsiteMap)) {
                for (const campground of campgrounds) {
                    const campsiteId = campground.campgroundId; // Extract the campgroundId from the object
                    const initialResponse = yield this.fetchSingleCampsitePage(state, campsiteId, 0, gad, arv, lsy, displayGISMap); // Start from page 1
                    allRecords = [...allRecords, ...initialResponse.records];
                    const totalPages = initialResponse.totalPages;
                    const pagesToFetch = Array.from({ length: totalPages }, (_, i) => i + 1);
                    // Process pages in batches
                    for (let i = 0; i < pagesToFetch.length; i += concurrencyLimit) {
                        const batch = pagesToFetch.slice(i, i + concurrencyLimit);
                        const fetchBatch = (batch) => __awaiter(this, void 0, void 0, function* () {
                            const promises = batch.map(page => this.fetchSingleCampsitePage(state, campsiteId, page, gad, arv, lsy, displayGISMap));
                            const results = yield Promise.all(promises);
                            results.forEach(result => allRecords.push(...result.records));
                        });
                        yield fetchBatch(batch);
                    }
                }
            }
            return allRecords;
        });
    }
    fetchAvailableCampsites(campsiteMap, gad, arv, lsy, displayGISMap) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch all campsite details
                const allCampsites = yield this.fetchAllCampsiteDetails(campsiteMap, gad, arv, lsy, displayGISMap);
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