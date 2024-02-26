import { Authentication } from './authentication.js'; // Adjust the path as necessary
import { Search } from './search.js'; // Adjust the path as necessary

(async () => {
    try {
        // Initialize the Authentication class
        const auth = new Authentication();
        await auth.refreshAuthToken(); // Ensure the auth token is refreshed before making any campsite requests

        // Initialize the Campsite class with the Authentication instance
        const campsite = new Search(auth);

        // Fetch all pages of campsite details using the Campsite class
        const allCampsiteDetails = await campsite.fetchAvailableCampsites("NY", "574", "2024-05-20", "2024-05-20", 1, true);
        console.log(allCampsiteDetails);
    } catch (error) {
        console.error('Error:', error);
    }
})();
