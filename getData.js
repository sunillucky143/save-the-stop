const { fetch } = require('./fetch.js'); // Adjust the path as per your file structure

async function runSample() {


    // Coordinates for the geospatial query
    const longitude = -1.8199999999999996;  // Example longitude
    const latitude = 88.21829440477250;   // Example latitude

    // Collection and query definition
    const collection = "Mango";  // Replace with your actual collection name
    const user_loc = {
        coordinates: [longitude, latitude]
    };
    const pipeline = [
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: user_loc.coordinates // Assuming query.coordinates is an array [longitude, latitude]
                },
                distanceField: "distance",
                spherical: true,
                maxDistance: 2000  // Maximum distance in meters
            }
        }
    ];


    try {
        // Connect to MongoDB

        // Fetch data using the SST class
        const result = await fetch(collection, pipeline);
        console.log("Query result:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
runSample();