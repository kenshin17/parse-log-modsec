var http =  require('http');
var filename = process.argv[2];
var parse = require('./parse.js');
var mysql = require('mysql');

if (!filename) {
        console.log('Usage: node log.js filename')
};

var spawn = require('child_process').spawn;
var tail = spawn('tail', ['-f', filename]);

var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "ubuntu",
  database : 'modsec'
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// parse log
tail.stdout.on('data', (data) => {
  var post  = {
    date: parse.getdate(`${data}`),
    time: parse.gettime(`${data}`),
    ip: parse.getip(`${data}`),
    id: parse.getid(`${data}`),
    msg: parse.getmsg(`${data}`),
    hostname: parse.gethostname(`${data}`),
    uri: parse.geturi(`${data}`),
    unique_id: parse.getunique_id(`${data}`)
  };
  var query = connection.query('INSERT INTO log SET ?', post, function(err, result) {
  });
  console.log(query.sql);
});


//http server
http.createServer(function (request, response) {
    console.log('request starting...');

    response.writeHead(200, {'Content-Type': 'text/plain' });

    tail.stdout.on('data', function (data) {
        response.write(data)
        //response.write('date' + date);                
    });
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');