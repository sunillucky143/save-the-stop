const { MongoClient, ServerApiVersion } = require("mongodb");

class SST {
    constructor() {
        this.uri = "mongodb+srv://saitejaalasyam:project123@save-the-stop.7kdmkck.mongodb.net/?retryWrites=true&w=majority&appName=save-the-stop";
        this.client = new MongoClient(this.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        this.dbName = "Project_db";
    }

    async connect() {
        try {
            await this.client.connect();
            return this.client;
        } catch (error) {
            console.error("Connection failed", error);
            throw error; // Ensure the error is propagated to the caller
        }
    }

    async fetchData(db, collection, query) {
        let client;
        try {
            client = await this.connect();
            const database = client.db(db || this.dbName);
            const collec = database.collection(collection);

            // Ensure query is an aggregation pipeline with $geoNear as the first stage
            const pipeline = [
                {
                    $geoNear: {
                        near: {
                            type: "Point",
                            coordinates: query.coordinates // Assuming query.coordinates is an array [longitude, latitude]
                        },
                        distanceField: "distance",
                        spherical: true,
                        maxDistance: 2000  // Maximum distance in meters
                    }
                }
            ];

            const cursor = await collec.aggregate(pipeline);
            const result = await cursor.toArray();
            return result;
        } catch (error) {
            console.error("Fetch failed", error);
            throw error; // Ensure the error is propagated to the caller
        } finally {
            if (client) {
                await client.close();
            }
        }
    }
}

module.exports = { SST };