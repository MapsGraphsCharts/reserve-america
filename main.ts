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

        // Assuming fetchExtendedAvailability is a method of Search class
        // Adjust parameters as needed, for example: durationMonths and stayLength
        const durationMonths = 6; // Example: looking for availability over the next 6 months
        const stayLength = 5; // Example: interested in stays of 5 nights
        const displayGISMap = true; // Based on your preference or requirement

        const extendedAvailabilityResults = await campsiteSearch.fetchExtendedAvailability(riCampgroundMap, "2024-05-20", durationMonths, stayLength, displayGISMap);
        console.log(extendedAvailabilityResults);
    } catch (error) {
        console.error('Error:', error);
    }
})();
