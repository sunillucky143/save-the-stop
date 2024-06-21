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
            console.log(collec);
            const ans = await myConnection.fetchData(undefined, collec, query);
            result.push(ans);
        }
    }
    catch (error) {
        console.log("Error Fetching Data",error);
    }
}

(async ()=> {
    const res = await fetch();
    console.log(res);
})();

module.exports={fetch};

