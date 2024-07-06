var {findStops}=require('./fetch');
const {distance} = require("./distanceOfStop");
var moment = require('moment');

async function nearestBus(route,direction,time,latitude,longitude,stop_id)
{
    const query={route:route,direction_id:direction};
    const filter={'route_seq':1};
    const data=await findStops(route,query,filter);
    const dist= await distance(route,direction,latitude,longitude,stop_id);
    if(dist.length<1) return "No bus Stops found";
    const dis = dist[0].distance;
    const speed=83.333333333;
    const duration = moment.duration(dis/speed, 'minutes');
    const route_seq=dist[0].route_seq;
    time=moment(time,'HH:mm').add(duration).format('HH:mm');
    const seq_id=bus(data,time,route_seq);
    const finalRoutes=await showRoutes(route_seq, seq_id, JSON.parse(JSON.stringify(data)), time);

    for(let i=0;i<finalRoutes.length;i++)
    {
        console.log(finalRoutes[i]);
    }
    return finalRoutes;
}
function bus(data,time,route_seq) {

    const endTime = data[route_seq-1].stops.time;




    const [startHour, startMinute] = time.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    const differenceInMinutes = startTotalMinutes-endTotalMinutes;
    const seq_id=Math.ceil(differenceInMinutes/30);

    return seq_id;
}
function calculateTime(data,seq_id)
{
    for(let i=0;i<data.length;i++)
    {
        data[i].seq_id=seq_id+1;
        const duration=moment.duration(30*seq_id,'minutes');
        data[i].stops.time=moment(data[i].stops.time,'HH:mm').add(duration).format('HH:mm');
        // console.log(data[i].stops.time);
    }
    return data;
}
async function showRoutes(route_seq,seq_id,data,time){
    var finalRoutes=[];
    let count =0;
    var startTime=data[0].stops.time;

    while(time>=startTime && count<3)
    {

        finalRoutes.push(calculateTime(JSON.parse(JSON.stringify(data)),seq_id));
        seq_id++;
        startTime=data[0].stops.time;
        count++;
    }
    return finalRoutes;
}

(async()=>{
console.log(await nearestBus("Kiwi",1,"07:49",88.28582767075004, -2.2012650068750905,50));
})();