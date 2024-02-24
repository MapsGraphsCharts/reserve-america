import {Authentication} from './authentication.js'; // Adjust the path as necessary
import { Search } from './search.js'; // Adjust the path as necessary

(async () => {
    try {
        // Initialize the Authentication class
        const auth = new Authentication();
        await auth.refreshAuthToken(); // Ensure the auth token is refreshed before making any campsite requests

        // Initialize the Campsite class with the Authentication instance
        const campsite = new Search(auth);

        // Fetch campsite details using the Campsite class
        const campsiteDetails = await campsite.fetchCampsiteDetails("574", 1, "2024-08-02", "2024-08-08", 1, true);
        console.log(campsiteDetails);
    } catch (error) {
        console.error('Error:', error);
    }
})();