const { MongoClient, ServerApiVersion } = require('mongodb');
/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});*/

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

function dis_cal(lat, long, dis){
    let lat_cal = dis/111000;
    let long_c = 111000*Math.cos(lat);
    let long_cal = dis/long_c;

    const parameters = {
        n_dis_lat : lat+lat_cal.toFixed(17),
        s_dis_lat : lat-lat_cal.toFixed(17),
        e_dis_long : long+long_cal.toFixed(17),
        w_dis_long : long-long_cal.toFixed(17),
    };

    return parameters;
}

function get_ll(data) {
    let ll = [];
    let count=0;
    var myMap=new Map();
    for (let i = 0; i < data.length; i++) {
        let stop = data[i].stops;
        let lat = stop.location.lat;
        let long = stop.location.long;

        // Print lat and long for debugging
        //console.log(`Checking stop_id: ${stop.stop_id} with lat: ${lat} and long: ${long}`);    uncomment this line to print lat and long
        // Calculate distance from the given lat and long
        let usr_lat = 88.21829440477246;
        let usr_long = -1.8199999999999992;
        let dis = dis_cal(usr_lat, usr_long, 500);


        if ((lat.toFixed(17) >= dis.s_dis_lat && lat.toFixed(17) <= dis.n_dis_lat) &&
            (long.toFixed(16) >= dis.w_dis_long && long.toFixed(16) <= dis.e_dis_long)) {
            if(myMap.has(stop.stop_name))
            {
                let idx=myMap.get(stop.stop_name);
                let temp=ll[idx];
                temp.push([stop.stop_id,stop.stop_name,data[i].route,data[i].direction_id]);
                ll[idx]=temp;
            }
            else {
                myMap.set(stop.stop_name,count);
                count++;
                ll.push([stop.stop_id, stop.stop_name, data[i].route, data[i].direction_id]);
            }
        }
    }

    console.log(`Total stops found: ${ll.length}`);
    ll.forEach(doc => {
        console.log(`Stop ID: ${doc}`);
    });

    return ll;
}


async function run() {
    try {
        await client.connect();
        const dbs = "Project_db";

        const collections = await client.db("Project_db").listCollections().toArray();
        //console.log('Available collections:', collections);

        let query = {};
        //console.log('Number of collections:', collections.length);

        for (let i = 0; i < collections.length; i++) {
            const collectionName = collections[i].name;
            query = { "route": collectionName }; // Construct the query object
            const ans = await fetch_data(dbs, collectionName, query);
            //console.log(collections[i].name);
            get_ll(ans);
        };


        //readline.close();

        // Await the fetch_data() promise

        /*ans.forEach(doc => {
          console.log(doc);
        });*/

    } finally {
        await client.close();
    }
}

run().catch(console.error);