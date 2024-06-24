const {SST}=require('./class.js');


var instance=new SST();
const collections=["Mango","Kiwi","Papaya","Orange"];
let allResults=[];

async function fetch(collection,pipeline)
{
    const myConnection=new SST();
    let client;
    try {
        client = await myConnection.connect();
        const database = client.db(myConnection.dbName);
        const collec = database.collection(collection);

        // Ensure query is an aggregation pipeline with $geoNear as the first stage


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
}}

module.exports={fetch};

