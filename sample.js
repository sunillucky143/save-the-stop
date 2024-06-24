const { SST } = require('./fetch.js'); // Adjust the path as per your file structure

async function runSample() {
    const con = new SST();

    // Coordinates for the geospatial query
    const longitude = -1.8199999999999996;  // Example longitude
    const latitude = 88.21829440477250;   // Example latitude

    // Collection and query definition
    const collection = "Mango";  // Replace with your actual collection name
    const user_loc = {
        coordinates: [longitude, latitude]
    };



    try {
        await con.connect(); // Connect to MongoDB

        // Fetch data using the SST class
        const result = await fetch( collection, query);
        console.log("Query result:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        const client=con.client;
        await client.close(); // Close the MongoDB connection
    }
}

runSample();