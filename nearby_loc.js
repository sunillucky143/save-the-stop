const {fetch}=require('./fetch.js');

function loc(data){
    console.log(data.length);
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

function loc(data) {
    let ll = [];
    let count=0;
    var myMap=new Map();
    for (let i = 0; i < data.length; i++) {
        let stop = 0;
        for(let j = 0; j < data[i].length; j++){
            stop = data[i][j].stops;
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
    }

    console.log(`Total stops found: ${ll.length}`);
    ll.forEach(doc => {
        console.log(`Stop ID: ${doc}`);
    });
    return ll;
}

(async ()=>
{
    const res=await fetch();
    loc(res);
})();





