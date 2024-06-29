var moment = require('moment');
const {fetchTime} = require("./fetch"); // require


var result=[];
async function maps (){
    const collection=["Mango","Orange","Papaya","Kiwi"];
    const query={'direction_id':0};
    result=await fetchTime("Mango",query);

    function Bus(route,trip,data)
    {
        this.route=route;
        this.trip=trip;
        this.data=data;
    }
    const data=result;
    var bus1= new Bus("Mango",0,JSON.parse(JSON.stringify(data)));
    var bus2=new Bus("Mango",0,JSON.parse(JSON.stringify(data)));

    for(let i=0;i<bus2.data.length-1;i++)
    {
        var time=moment(bus2.data[i].stops.time_departure,'HH:mm');

        bus2.data[i].stops.time_departure=time.add(moment.duration('00:30')).format('HH:mm');

    }
    console.log("Bus1 : "+bus1.data[0].stops.time_departure);
    console.log("Bus2 : "+bus2.data[0].stops.time_departure);



}
maps();


