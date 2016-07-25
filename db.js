var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "ubuntu",
  database : 'modsec'
});

exports.connection = connection;