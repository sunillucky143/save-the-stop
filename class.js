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
        this.db = "Project_db";
    }

    async connect() {
        try {
            await this.client.connect();
            return this.client;
        } catch (error) {
            console.error("Connection failed", error);
        }
    }

    async fetchData(db, collection, query) {
        let client;
        try {
            client = await this.connect();
            const database = client.db(db || this.db);
            const collec = database.collection(collection);
            const cursor = collec.find(query);
            const result = await cursor.toArray();
            return result;
        } catch (error) {
            console.error("Fetch failed", error);
        } finally {
            if (client) {
                await client.close();
            }
        }
    }
}

export {SST};

/*(async () => {
    const myConnection = new SST();
    const collection = "Kiwi";
    const query = { "route": collection };
    try {
        const ans = await myConnection.fetchData(undefined, collection, query);
        console.log(ans);
    } catch (error) {
        console.error("Error fetching data", error);
    }
})();*/
