const { fetch } = require('./fetch.js'); // Adjust the path as per your file structure

async function getNearbyBusStops() {


    // Coordinates for the geospatial query
    const longitude = -1.82;  // Example longitude
    const latitude = 88.21829440477250;   // Example latitude

    // Collection and query definition
    const collections = ["Mango","Papaya","Orange","Kiwi"];  // Replace with your actual collection name
    const user_loc = {
        coordinates: [latitude, longitude]
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
                maxDistance: 1000
            }
        }
    ];


        try {
            // Connect to MongoDB
            for(let collection of collections) {

                // Fetch data using the SST class
                const result=await fetch(collection, pipeline);
                console.log(result);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
}
getNearbyBusStops();

module.exports={getNearbyBusStops};