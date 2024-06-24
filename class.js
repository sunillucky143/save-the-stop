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

    async fetch()
    {
        try {
            const client=this.client;
            await client.connect();
            const database = client.db(this.dbName);
            const collec = database.collection("Orange");
            const cursor = collec.find({"route":"Orange"});
            const result = await cursor.toArray();
            console.log(result);
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }


}

module.exports = { SST };