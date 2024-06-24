const {SST}=require('./class.js');


var instance=new SST();



async function fetch(collection,pipeline)
{
    const myConnection=new SST();
    let client;
    try {
        client = await myConnection.connect();
        const database = client.db(myConnection.dbName);
        const collec = database.collection(collection);
        const cursor = await collec.aggregate(pipeline);

        return await cursor.toArray();
    } catch (error) {
        console.error("Fetch failed", error);
        throw error; // Ensure the error is propagated to the caller
    } finally {
        if (client) {
            await client.close();
        }
}}

module.exports={fetch};

