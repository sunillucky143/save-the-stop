var moment = require('moment'); // require
var time=moment();
var sum=time.add(moment.duration('00:30'));
console.log(sum.format('HH:mm'));

