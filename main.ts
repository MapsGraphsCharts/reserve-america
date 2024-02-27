import { Authentication } from './authentication.js'; // Adjust the path as necessary
import { Search } from './search.js'; // Adjust the path as necessary
import { stateCampgroundMap } from './campgroundMap.js'; // Import the stateCampgroundMap

(async () => {
    try {
        const auth = new Authentication();
        await auth.refreshAuthToken(); // Ensure the auth token is refreshed before making any campsite requests

        const campsiteSearch = new Search(auth);

        const riCampgroundMap: StateCampgroundMap = {
            'RI': stateCampgroundMap['RI']
        };


        // Fetch all pages of campsite details using the updated method
        const allCampsiteDetails = await campsiteSearch.fetchAvailableCampsites(riCampgroundMap, "2024-05-20", "2024-05-20", 5, true ); // Adjust concurrencyLimit as needed
        console.log(allCampsiteDetails);
    } catch (error) {
        console.error('Error:', error);
    }
})();

