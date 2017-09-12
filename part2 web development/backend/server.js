const Express = require('express');
const BodyParser = require('body-parser');
const http = require('http');
const mysql = require('mysql');
const cors = require('cors')

const hostname = '127.0.0.1';
const port = 3000;
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "cortilabs"
});
/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM prediction", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
});*/

var app = Express();
var router = Express.Router();

app.use(BodyParser.json());
app.use(Express.static('public'))
app.disable('etag');
app.use(cors())

app.use('/', router);


router.get('/', function(req, res) {
	console.log('ikke secured');
	res.end('Hello World\n');
	res.sendStatus(200);
});


router.get('/test', function(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	getAllPredictions(function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log(JSON.stringify(data));
            res.end(JSON.stringify(data)); 
        }    

	});
});


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

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});