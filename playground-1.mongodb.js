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
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':88.35,'long':-1.82,'initial_stop':1,'final_stop':0,'time_arrival':'0.','time_departure':'06:10a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':88.295002059135755,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival': 06:20a.m.','time_departure':'06:20a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop' ,'location':{'lat':88.25737188907075,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'06:27a.m.','time_departure':'06:27a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':88.21829440477255,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'06:34 a.m.','time_departure':'06:34 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':5,'stop_name':'LED Bus Stop','location':{'lat':88.1734276635412,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival': 06:42 a.m.','time_departure':'06:42a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':6,'stop_name':'Library Bus Stop','location':{'lat':88.14158675040942,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'06:48 a.m.','time_departure':'06:48 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':88.10829852304414,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'06:54 a.m.','time_departure':'06:54 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':88.05185326794657,'long':-1.8199999999999994,'initial_stop':0,'final_stop':0,'time_arrival':'07:04 a.m.','time_departure':'07:04 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':9,'stop_name':'Echo Bus Stop','location':{'lat':88.0156704121148,'long':-1.8199999999999994,'initial_stop':0,'final_stop':0,'time_arrival':'07:04 a.m.','time_departure':'07:04 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':10,'stop_name':'Space Bus Stop','location':{'lat':87.97514561358336,'long':-1.8199999999999994,'initial_stop':0,'final_stop':0,'time_arrival':'07:17 a.m.','time_departure':'07:17 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':11,'stop_name':'Galaxy Bus Stop','location':{'lat':87.92593692965224,'long':-1.8199999999999994,'initial_stop':0,'final_stop':1,'time_arrival':'07:26 a.m.','time_departure':'07:26 a.m.'}}},
  
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':12,'stop_name':'Floating Bus Stop','location':{'lat':88.3486970776304,'long':-1.8145366411563608,'initial_stop':1,'final_stop':0,'time_arrival':'07:41 a.m.','time_departure':'07:41 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':13,'stop_name':'Zebra Bus Stop','location':{'lat':88.29369946689887,'long':-1.8145366411563608,'initial_stop':0,'final_stop':1,'time_arrival':'07:32 a.m.','time_departure':'07:32 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':14,'stop_name':'Crab Bus Stop','location':{'lat':88.25606929683407,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'07:23 a.m.','time_departure':'07:23 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':88.2169918125358,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'07:17 a.m.','time_departure':'07:17 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':16,'stop_name':'LED Bus Stop','location':{'lat':88.1721250713045,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'07:11 a.m.','time_departure':'07:11 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':17,'stop_name':'Library Bus Stop','location':{'lat':88.14028415817252,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'07:04 a.m.','time_departure':'07:04 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':18,'stop_name':'Glass House Bus Stop','location':{'lat':88.10699593080749,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'06:59 a.m.','time_departure':'06:59 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':19,'stop_name':'Invisible Bus Stop','location':{'lat':88.05055067571006,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'06:54 a.m.','time_departure':'06:54 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':20,'stop_name':'Echo Bus Stop','location':{'lat':88.01436781987826,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'06:45 a.m.','time_departure':'06:45 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':21,'stop_name':'Space Bus Stop','location':{'lat':87.9738430213468,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'06:39 a.m.','time_departure':'06:39 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':22,'stop_name':'Galaxy Bus Stop','location':{'lat':87.92463433741567,'long':-1.8145366411563608,'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'06:33 a.m.'}}}
  
  
]);


db.getCollection('Papaya').insertMany([
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':88.35,'long':-1.82,'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:22 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':88.29500205913575,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'6:30 a.m.','time_departure':'6:30 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop','location':{'lat':88.25737188907075,'long':-1.819999999999999,'initial_stop':0,'final_stop':0,'time_arrival':'6:36 a.m.','time_departure':'6:36 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':88.21829440477255,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'6:42 a.m.','time_departure':'6:42 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':23,'stop_name':'Plastic Bus Stop','location':{'lat':88.21743484152333,'long':-0.0400354754689092,'initial_stop':0,'final_stop':0,'time_arrival':'6:50 a.m.','time_departure':'6:50 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':24,'stop_name':'Fish Bus Stop','location':{'lat':88.21709654979573,'long':1.0764843328676998,'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':25,'stop_name':'Tree Bus Stop','location':{'lat':88.21653228584341,'long':2.518260466874731,'initial_stop':0,'final_stop':0,'time_arrival':'7:02 a.m.','time_departure':'7:02 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':26,'stop_name':'Rock Bus Stop','location':{'lat':88.2162974709084,'long':3.4453699527514834,'initial_stop':0,'final_stop':1,'time_arrival':'7:06 a.m.','time_departure':'7:06 a.m.'}}},


  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':12,'stop_name':'Floating Bus Stop','location':{'lat':88.3486970776304,'long':1.8145366411563608,'initial_stop':0,'final_stop':1,'time_arrival':'7:15 a.m.','time_departure':'7:15 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':13,'stop_name':'Zebra Bus Stop','location':{'lat':88.29369946689887,'long':1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'7.07 a.m.','time_departure':'7.07 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':14,'stop_name':'Crab Bus Stop','location':{'lat':88.25606929683407,'long':1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'7.01 a.m.','time_departure':'7.01 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':88.2169918125358,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':27,'stop_name':'Plastic Bus Stop','location':{'lat':88.21613287735067,'long':-0.035871230633999315,'initial_stop':0,'final_stop':0,'time_arrival':'6:47 a.m.','time_departure':'6:47 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':28,'stop_name':'Fish Bus Stop','location':{'lat':88.2157948326395,'long':1.0798341492692634,'initial_stop':0,'final_stop':0,'time_arrival':'6:42 a.m.','time_departure':'6:42 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':29,'stop_name':'Tree Bus Stop','location':{'lat':88.21523098049752,'long':2.520559177893173,'initial_stop':0,'final_stop':0,'time_arrival':'6:35 a.m.','time_departure':'6:35 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':30,'stop_name':'Rock Bus Stop','location':{'lat':88.21499633685825,'long':3.4469930293111823,'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:31 a.m.'}}}

])

db.getCollection('Orange').insertMany([
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':31,'stop_name':'Music Bus Stop','location':{'lat':88.21653764139644,'long':-6.128253220688306,'initial_stop':1,'final_stop':0,'time_arrival':'0','time_departure':'6:30 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':32,'stop_name':'Dance Bus Stop','location':{'lat':88.21715023317154,'long':-4.625997429888513,'initial_stop':0,'final_stop':0,'time_arrival':'6:37 a.m.','time_departure':'6:37 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':33,'stop_name':'Bike Bus Stop','location':{'lat':88.21800741311085,'long':-2.8486441786641703,'initial_stop':0,'final_stop':0,'time_arrival':'6:45 a.m.','time_departure':'6:45 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':88.21829440477255,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'6:50 a.m.','time_departure':'6:50 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':23,'stop_name':'Plastic Bus Stop','location':{'lat':88.21743484152333,'long':-0.04003547546890924,'initial_stop':0,'final_stop':0,'time_arrival':'6:58 a.m.','time_departure':'6:58 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':24,'stop_name':'Fish Bus Stop','location':{'lat':88.21709654979573,'long':1.0764843328676998,'initial_stop':0,'final_stop':0,'time_arrival':'7:03 a.m.','time_departure':'7:03 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':25,'stop_name':'Tree Bus Stop','location':{'lat':88.21653228584341,'long':2.518260466874731,'initial_stop':0,'final_stop':0,'time_arrival':'7:10 a.m.','time_departure':'7:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':34,'stop_name':'Rock Bus Stop','location':{'lat':88.2162974731744,'long':3.4482589462671127,'initial_stop':0,'final_stop':0,'time_arrival':'7:14 a.m.','time_departure':'7:14 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':35,'stop_name':'Vintage Bus Stop','location':{'lat':88.21540488018111,'long':5.261071859794709,'initial_stop':0,'final_stop':0,'time_arrival':'7:22 a.m.','time_departure':'7:22 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':36,'stop_name':'Bird House Bus Stop','location':{'lat':88.21480420129247,'long':6.747926650596862,'initial_stop':0,'final_stop':1,'time_arrival':'7:29 a.m.','time_departure':'7:29 a.m.'}}},
 
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':37,'stop_name':'Music Bus Stop','location':{'lat':88.21523633214328,'long':-6.1196467638808745,'initial_stop':0,'final_stop':1,'time_arrival':'7:39 a.m.','time_departure':'7:39 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':38,'stop_name':'Dance Bus Stop','location':{'lat':88.21584847682256,'long':-4.618486196615595,'initial_stop':0,'final_stop':0,'time_arrival':'7:32 a.m.','time_departure':'7:32 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':39,'stop_name':'Bike Bus Stop','location':{'lat':88.21670503063986,'long':-2.8424297383848227,'initial_stop':0,'final_stop':0,'time_arrival':'7:24 a.m.','time_departure':'7:24 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':15,'stop_name':'Solar Bus Stop','location':{'lat':88.2169918125358,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'7:19 a.m.','time_departure':'7:19 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':27,'stop_name':'Plastic Bus Stop','location':{'lat':88.21613287735067,'long':-0.035871230633999315,'initial_stop':0,'final_stop':0,'time_arrival':'7:11 a.m.','time_departure':'7:11 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':28,'stop_name':'Fish Bus Stop','location':{'lat':88.2157948326395,'long':1.0798341492692634,'initial_stop':0,'final_stop':0,'time_arrival':'7:06 a.m.','time_departure':'7:06 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':29,'stop_name':'Tree Bus Stop','location':{'lat':88.21523098049752,'long':2.520559177893173,'initial_stop':0,'final_stop':0,'time_arrival':'6:59 a.m.','time_departure':'6:59 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':40,'stop_name':'Rock Bus Stop','location':{'lat':88.21499633912259,'long':3.4498799176474026,'initial_stop':0,'final_stop':0,'time_arrival':'6:55 a.m.','time_departure':'6:55 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':41,'stop_name':'Vintage Bus Stop','location':{'lat':88.21410439685839,'long':5.261372733779118,'initial_stop':0,'final_stop':0,'time_arrival':'6:47 a.m.','time_departure':'6:47 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':42,'stop_name':'Bird House Bus Stop','location':{'lat':88.21350415551827,'long':6.747145637417199,'initial_stop':01,'final_stop':0,'time_arrival':'0','time_departure':'6:40 a.m.'}}}
 ])


 db.getCollection('Kiwi').insertMany([
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':88.35,'long':-1.82,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':43,'stop_name':'Pixel Bus Stop','location':{'lat':88.3496900901281,'long':-2.930706882536684,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':33,'stop_name':'Bike Bus Stop','location':{'lat':88.21800741311085,'long':-2.8486441786641703,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':44,'stop_name':'Piano Bus Stop','location':{'lat':88.2179844949006,'long':-2.9307068825366835,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':45,'stop_name':'Gothic Bus Stop','location':{'lat':88.16298655403638,'long':-2.930706882536683,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':88.10829852304414,'long':-1.8199999999999996,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':88.05185326794657,'long':-1.8199999999999994,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':46,'stop_name':'Fold Bus Stop','location':{'lat':88.05127310691971,'long':-1.9620017821835052,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':34,'stop_name':'Rock Bus Stop','location':{'lat':88.21540488018111,'long':3.4482589462671127,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':35,'stop_name':'Vintage House Bus Stop','location':{'lat':88.21410439685839,'long':5.261071859794709,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':47,'stop_name':'Carvana Bus Stop','location':{'lat':88.341651564964,'long':4.6540770248954855,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':48,'stop_name':'Floating Bus Stop','location':{'lat':88.35,'long':-1.82,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 

  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':49,'stop_name':'Floating Bus Stop','location':{'lat':88.3486970776304,'long':-1.8145366411563608,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':50,'stop_name':'Pixel Bus Stop','location':{'lat':88.28582767075004,'long':-2.2012650068750905,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':39,'stop_name':'Bike Bus Stop','location':{'lat':88.21670503063986,'long':-2.8424297383848227,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':51,'stop_name':'Piano Bus Stop','location':{'lat':88.14109624742339,'long':-2.2012650068750905,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':52,'stop_name':'Gothic Bus Stop','location':{'lat':88.08609830655915,'long':-2.2012650068750905,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':18,'stop_name':'Glass House Bus Stop','location':{'lat':88.10699593080749,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':19,'stop_name':'Invisible Bus Stop','location':{'lat':88.05055067571006,'long':-1.8145366411563608,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':53,'stop_name':'Fold Bus Stop','location':{'lat':88.03674790076613,'long':3.5298951574166626,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':40,'stop_name':'Rock Bus Stop','location':{'lat':88.21499633912259,'long':3.4498799176474026,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':41,'stop_name':'Vintage House Bus Stop','location':{'lat':88.21410439685839,'long':5.261372733779118,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':54,'stop_name':'Carvana Bus Stop','location':{'lat':88.33578115046177,'long':5.330383365520733,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':55,'stop_name':'Floating Bus Stop','location':{'lat':88.3486970776304,'long':-1.8145366411563608,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
  
 ])

