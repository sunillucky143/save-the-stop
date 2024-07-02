var {findStops}=require('./fetch');
const {distance} = require("./distanceOfStop");
var moment = require('moment');

async function nearestBus(route,direction,time,latitude,longitude,stop_id)
{
    const query={route:route,direction_id:direction};
    const data=await findStops(route,query);
    const dist= await distance(route,direction,latitude,longitude,stop_id);
    const dis = dist[0].distance;
    const speed=83.333333333;
    const duration = moment.duration(dis/speed, 'minutes');
    const route_seq=dist[0].route_seq;
    time=moment(time,'HH:mm').add(duration).format('HH:mm').toString();
    bus(data,time,route_seq);
}
function bus(data,time,route_seq) {

    const endTime = data[route_seq-1].stops.time;

    // const timeDiff=moment(time,'HH:mm').subtract(moment(endTime,'HH:mm'));
    // console.log(timeDiff.format('HH:mm'));



    const [startHour, startMinute] = time.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    const differenceInMinutes = startTotalMinutes-endTotalMinutes;
    const seq_id=differenceInMinutes/30;
    console.log(seq_id);
    return differenceInMinutes;


}
nearestBus("Mango", 0,"09:53",88.21,-1.82,4);