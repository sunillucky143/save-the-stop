/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Project_db');

// Insert a few documents into the sales collection.
db.getCollection('Mango').insertMany([
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':88.35,'long':-1.82,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':88.29500205913575,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop' ,'location':{'lat':88.31236982993475,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':88.3109225157017,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':5,'stop_name':'LED Bus Stop','location':{'lat':88.30513325876841,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':6,'stop_name':'Library Bus Stop','location':{'lat':88.31815908686809,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':88.31671177263453,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':88.29355474490244,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':9,'stop_name':'Echo Bus Stop','location':{'lat':88.31381714416813,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':10,'stop_name':'Space Bus Stop','location':{'lat':88.30947520146827,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':11,'stop_name':'Galaxy Bus Stop','location':{'lat':88.30079131606904,'long':-1.82,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':12,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':13,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':14,'stop_name':'Crab Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':16,'stop_name':'LED Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':17,'stop_name':'Library Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':18,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':19,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':20,'stop_name':'Echo Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':21,'stop_name':'Space Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':22,'stop_name':'Galaxy Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
  
  
]);

db.getCollection('Papaya').insertMany([
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':23,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':24,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':25,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':26,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':12,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':13,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':14,'stop_name':'Crab Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':27,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':28,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':29,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':30,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}

])

db.getCollection('Orange').insertMany([
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':31,'stop_name':'Music Bus Stop','location':{'lat':88.30561537640922,'long':-6.3573406316195165,'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:30 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':32,'stop_name':'Dance Bus Stop','location':{'lat':88.30867001258035,'long':-4.778218879500836,'initial_stop':0,'final_stop':0,'time_arrival':'6:37 a.m.','time_departure':'6:37 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':33,'stop_name':'Bike Bus Stop','location':{'lat':88.31061977843123,'long':-2.905023636014059,'initial_stop':0,'final_stop':0,'time_arrival':'6:45 a.m.','time_departure':'6:45 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':88.3109225157017,'long':-1.82,'initial_stop':0,'final_stop':0,'time_arrival':'6:50 a.m.','time_departure':'6:50 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':23,'stop_name':'Plastic Bus Stop','location':{'lat':88.31001580949109,'long':0.057478160383255546,'initial_stop':0,'final_stop':0,'time_arrival':'6:58 a.m.','time_departure':'6:58 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':24,'stop_name':'Fish Bus Stop','location':{'lat':88.30852207775621,'long':1.2337045983056836,'initial_stop':0,'final_stop':0,'time_arrival':'7:03 a.m.','time_departure':'7:03 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':25,'stop_name':'Tree Bus Stop','location':{'lat':88.30554072737579,'long':2.749055943408129,'initial_stop':0,'final_stop':0,'time_arrival':'7:10 a.m.','time_departure':'7:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':34,'stop_name':'Rock Bus Stop','location':{'lat':88.30299059883569,'long':3.723449644153487,'initial_stop':0,'final_stop':0,'time_arrival':'7:14 a.m.','time_departure':'7:14 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':35,'stop_name':'Vintage Bus Stop','location':{'lat':88.2966138468996,'long':5.613814254292383,'initial_stop':0,'final_stop':0,'time_arrival':'7:22 a.m.','time_departure':'7:22 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':36,'stop_name':'Bird House Bus Stop','location':{'lat':88.29000766648952,'long':7.153015750179861,'initial_stop':0,'final_stop':1,'time_arrival':'7:29 a.m.','time_departure':'7:29 a.m.'}}},
 
 
 
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':37,'stop_name':'Music Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'7:39 a.m.','time_departure':'7:39 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':38,'stop_name':'Dance Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'7:32 a.m.','time_departure':'7:32 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':39,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'7:24 a.m.','time_departure':'7:24 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'7:19 a.m.','time_departure':'7:19 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':27,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'7:11 a.m.','time_departure':'7:11 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':28,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'7:06 a.m.','time_departure':'7:06 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':29,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'6:59 a.m.','time_departure':'6:59 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':40,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':41,'stop_name':'Vintage Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'6:47 a.m.','time_departure':'6:47 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':42,'stop_name':'Bird House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':01,'final_stop':0,'time_arrival':'0','time_departure':'6:40 a.m.'}}}
 ])

 db.getCollection('Kiwi').insertMany([
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':43,'stop_name':'Pixel Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':33,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':44,'stop_name':'Piano Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':45,'stop_name':'Gothic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':46,'stop_name':'Fold Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':34,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':35,'stop_name':'Vintage House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':47,'stop_name':'Carvana Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':48,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 
 
 
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':49,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':50,'stop_name':'Pixel Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':39,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':51,'stop_name':'Piano Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':52,'stop_name':'Gothic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':18,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':19,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':53,'stop_name':'Fold Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':40,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':41,'stop_name':'Vintage House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':54,'stop_name':'Carvana Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':55,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
  
 ])

