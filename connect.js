const { MongoClient, ServerApiVersion } = require('mongodb');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const uri = "mongodb+srv://saitejaalasyam:project123@save-the-stop.7kdmkck.mongodb.net/?retryWrites=true&w=majority&appName=save-the-stop";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function fetch_data(db, collection, query) {
  try {
    await client.connect();
    await client.db("save-the-stop").command({ ping: 1 });
    const database = client.db(db);
    const collec = database.collection(collection);
    const cursor = collec.find(query);
    const result = await cursor.toArray();
    return result;
  } finally {
    await client.close();
  }
}

async function run() {
  try {
    const db = "Project_db";

    const collection = await new Promise(resolve => {
      readline.question('Enter the collection name: ', collection => {
        resolve(collection);
      });
    });

    const query = await new Promise(resolve => {
      readline.question('Enter the query: ', query => {
        resolve(JSON.parse(query)); // Parse the query string into a JavaScript object
      });
    });

    readline.close();

    const ans = await fetch_data(db, collection, query); // Await the fetch_data() promise
    ans.forEach(doc => {
      console.log(doc);
    });

  } finally {
    await client.close();
  }
}

run().catch(console.error);
