const { fetch } = require('./fetch.js'); // Adjust the path as per your file structure

async function distance(route,direction,lat,long,id) {


    // Coordinates for the geospatial query
    const longitude = long;  // Example longitude
    const latitude = lat;   // Example latitude

    // Collection and query definition
    const collection =route;  // Replace with your actual collection name
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
        },
        {
            $match:{
                direction_id:direction,
                'stops.stop_id':id
            }
        },
        { $sort: { route_seq: 1 } }

    ];


    try {
        // Connect to MongoDB


            // Fetch data using the SST class
            const filter={'route_seq':1}
            const result=await fetch(collection, pipeline);
            return result;


    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


module.exports={distance};