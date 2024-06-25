var {findStops}= require('./fetch.js');
var {fetch}=require('./fetch.js');
async function showStops(route,direction)
{

    const query={'direction_id': direction};
    const filter={'route_seq':1}
    var result=await findStops(route,query,filter);
    console.log(result);

}
showStops("Mango",0);
