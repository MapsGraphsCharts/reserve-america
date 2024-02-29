import { Authentication } from './authentication.js'; // Adjust the path as necessary
import { Search } from './search.js'; // Adjust the path as necessary
import { stateCampgroundMap } from './campgroundMap.js'; // Import the stateCampgroundMap

(async () => {
    try {
        const auth = new Authentication();
        await auth.refreshAuthToken(); // Ensure the auth token is refreshed before making any campsite requests

        const campsiteSearch = new Search(auth);

        const specificCampgroundId = '574'; // Replace with your specific campgroundId

        const riCampgroundMap: StateCampgroundMap = {
            'NY': stateCampgroundMap['NY'].filter(campground => campground.campgroundId === specificCampgroundId)
        };


        const stayLength = 5; // Assuming a stay length of 5 nights
        const displayGISMap = true; // Assuming you want to display GIS Map information

        // Fetch extended availability
        const extendedAvailabilityResults = await campsiteSearch.fetchAllCampsiteDetails(riCampgroundMap, "2024-05-20", "2024-05-20", stayLength, displayGISMap, true);
        console.log(extendedAvailabilityResults);
    } catch (error) {
        console.error('Error:', error);
    }
})();
