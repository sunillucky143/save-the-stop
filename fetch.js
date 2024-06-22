const {SST}=require('./class.js');

console.log(SST);
var instance=new SST();
const collections=["Mango","Kiwi","Papaya","Orange"];
let allResults=[];

async function fetch( query)
{
    const myConnection=new SST();
    try{
        for(const collec of collections) {

            let db=myConnection.db;
            const client=myConnection.client;
            const collection = client.db("db").collection(collec);
            const ans = await collection.aggregate(query).toArray();
            allResults = allResults.concat(ans);
            console.log(ans);
        }

        // Sort all combined results and get the top 3
        allResults.sort((a, b) => a.distance - b.distance);
        const topResults = allResults.slice(0, 3);

        return topResults;
    }
    catch (error) {
        console.log("Error Fetching Data",error);
    }
}

module.exports={fetch};

