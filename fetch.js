const {SST}=require('./class.js');

console.log(SST);
var instance=new SST();
const collections=["Mango","Kiwi","Papaya","Orange"];
const result=[];

async function fetch()
{
    const myConnection=new SST();
    try{
        for(const collec of collections) {
            const query = {"route": collec};
            const ans = await myConnection.fetchData(undefined, collec, query);
            result.push(ans);
        }
        return result;
    }
    catch (error) {
        console.log("Error Fetching Data",error);
    }
}

module.exports={fetch};

