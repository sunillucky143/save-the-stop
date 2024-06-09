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
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':3,'stop_name':' Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':5,'stop_name':'LED Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':6,'stop_name':'Library Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':9,'stop_name':'Echo Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':10,'stop_name':'Space Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':0,'stops':{'stop_id':11,'stop_name':'Galaxy Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':1,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':2,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':3,'stop_name':' Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':4,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':5,'stop_name':'LED Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':6,'stop_name':'Library Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':7,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':8,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':9,'stop_name':'Echo Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':10,'stop_name':'Space Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Mango','direction_id':1,'stops':{'stop_id':11,'stop_name':'Galaxy Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
  
  
]);

db.getCollection('Papaya').insertMany([
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':0,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Zebra Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Crab Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Papaya','direction_id':1,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}

])

db.getCollection('Orange').insertMany([
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Music Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Dance Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Vintage Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':0,'stops':{'stop_id':3,'stop_name':'Bird House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 
 
 
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Music Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Dance Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Solar Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Plastic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Fish Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Tree Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Vintage Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Orange','direction_id':1,'stops':{'stop_id':3,'stop_name':'Bird House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':01,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
 ])

 db.getCollection('Kiwi').insertMany([
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Pixel Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Piano Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Gothic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Fold Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Vintage House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Carvana Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
 
 
 
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Pixel Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Bike Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Piano Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Gothic Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Glass House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Invisible Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Fold Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Rock Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Vintage House Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Carvana Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':0,'final_stop':1,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}},
  {'seq_id':1,'route':'Kiwi','direction_id':0,'stops':{'stop_id':3,'stop_name':'Floating Bus Stop','location':{'lat':33.42264,'long':-111.748,'initial_stop':1,'final_stop':0,'time_arrival':'4.10 a.m.','time_departure':'4:10 a.m.'}}}
  
 ])

