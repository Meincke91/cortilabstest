const Express = require('express');
const BodyParser = require('body-parser');
const http = require('http');
const mysql = require('mysql');
const cors = require('cors')

const hostname = '127.0.0.1';
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "cortilabs"
});

var app = Express();
var router = Express.Router();

app.use(BodyParser.json());
app.use(Express.static('public'))
app.disable('etag');
app.use(cors())

app.use('/', router);

router.get('/device', function(req, res) {
  deviceId = req.query.deviceId
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  getDeviceFromId(deviceId, function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            res.end(JSON.stringify(data)); 
        }    
  });
});

router.get('/predictions', function(req, res) {
  deviceId = req.query.deviceId
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  getPredictionsFromDeviceId(deviceId, function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            res.end(JSON.stringify(data)); 
        }    
  });
});

router.get('/calls', function(req, res) {
  deviceId = req.query.deviceId
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  getAllCallsForDeviceId(deviceId, function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            res.end(JSON.stringify(data)); 
        }    
  });
});


/**
* Database call functions
**/
function getDeviceFromId(id, callback)
{ 
  con.connect(function(err) {
      con.query('SELECT * FROM devices WHERE deviceId=?',id, function(err, result)
      {
          if (err) 
              callback(err,null);
          else
              callback(null,result);

      });
  });
}

function getAllCallsForDeviceId(id, callback){
  con.connect(function(err) {

      con.query('SELECT calls.createdAt, prediction.ca, prediction.predictionTime FROM cortilabs.calls inner join prediction on calls.predictionId = prediction.predictionId where calls.deviceId=?',id, function(err, result)
      {
          if (err) 
              callback(err,null);
          else
              callback(null,result);

      });
  });
}
function getPredictionsFromDeviceId(id, callback)
{ 
  con.connect(function(err) {
      con.query('SELECT * FROM prediction WHERE device=?',id, function(err, result)
      {
          if (err) 
              callback(err,null);
          else
              callback(null,result);

      });
  });
}

function getAllPredictions(callback)
{	
	con.connect(function(err) {
	    con.query('SELECT * FROM prediction', function(err, result)
	    {
	        if (err) 
	            callback(err,null);
	        else
	            callback(null,result);

	    });
	});
}

/**
* start the application
**/

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});