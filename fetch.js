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
        const cursor = await collec.aggregate(pipeline).sort({'route_seq':1});

        return await cursor.toArray();
    } catch (error) {
        console.error("Fetch failed", error);
        throw error; // Ensure the error is propagated to the caller
    } finally {
        if (client) {
            await client.close();
        }
}}
async function fetchTime(collection,query)
{
    const myConnection=new SST();
    let client;
    try {
        client = await myConnection.connect();
        const database = client.db(myConnection.dbName);
        const collec = database.collection(collection);
        const cursor = await collec.find(query).limit(0).toArray();

        return await cursor;
    } catch (error) {
        console.error("Fetch failed", error);
        throw error; // Ensure the error is propagated to the caller
    } finally {
        if (client) {
            await client.close();
        }
    }}
async function findStops(collection,pipeline,filter)
{
    const myConnection=new SST();
    let client;
    try {
        client = await myConnection.connect();
        const database = client.db(myConnection.dbName);
        const collec = database.collection(collection);
        const cursor = await collec.find(pipeline).sort(filter);

        return await cursor.toArray();
    } catch (error) {
        console.error("Fetch failed", error);
        throw error; // Ensure the error is propagated to the caller
    } finally {
        if (client) {
            await client.close();
        }
    }
}


module.exports={fetch,findStops,fetchTime};


