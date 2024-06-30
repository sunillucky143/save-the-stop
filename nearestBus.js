var {findStops}=require('./fetch');

async function nearestBus(route,direction,time)
{
    const query={route:route,direction_id:direction};
    var result=await findStops(route,query);
    bus(result,time);
}
function bus(result,time) {
    console.log(result,time);

}
nearestBus("Mango", 0);