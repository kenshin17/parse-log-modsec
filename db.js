var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "secret",
  database : 'modsec'
});

exports.connection = connection;
