const {MongoClient, ServerApiVersion} = require("mongodb");

class SST{
    uri = "mongodb+srv://saitejaalasyam:project123@save-the-stop.7kdmkck.mongodb.net/?retryWrites=true&w=majority&appName=save-the-stop";
    client = new MongoClient(this.uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    db="Project_db"



    async connect(client=this.client){
        try {
            await client.connect();
            return client;
        } finally {
            await client.close();
        }
    }
    async fetchData(db=this.db,collection,query)
    {
            this.client=this.connect();
            const database = this.client.db(db);
            const collections = await client.db("Project_db").listCollections().toArray();
            const collec = database.collection(collection);
            const cursor = collec.find(query);




    }

}

var myconnection=new SST();
myconnection.connect();