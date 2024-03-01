import { Authentication } from './authentication.js'; // Adjust the path as necessary
import { Search, StateCampgroundMap } from './search.js';
import { stateCampgroundMap } from './campgroundMap.js'; // Import the stateCampgroundMap

(async () => {
    try {
        const auth = new Authentication();
        await auth.refreshAuthToken(); // Ensure the auth token is refreshed before making any campsite requests

        const campsiteSearch = new Search(auth);

        const specificCampgroundIds = ['547', '221', '218']; // Replace with your specific campgroundIds

        const CampgroundMap: StateCampgroundMap = {
            'NY': stateCampgroundMap['NY'].filter(campground => specificCampgroundIds.includes(campground.campgroundId))
        };


        const stayLength = 5; // Assuming a stay length of 5 nights
        const displayGISMap = true; // Assuming you want to display GIS Map information

        // Fetch extended availability
        const topSites = await campsiteSearch.getTopSitesByDemand(10,CampgroundMap, "2024-05-20", 1, stayLength, displayGISMap);
        const weekendAvailability = await campsiteSearch.getWeekendAvailability(topSites);
        console.log(topSites);
    } catch (error) {
        console.error('Error:', error);
    }
})();
