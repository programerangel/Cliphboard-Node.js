const clipboardy = require('clipboardy');
const CSV = require('csv-string');
let cbData = clipboardy.readSync();
var parsedCsv = CSV.parse(cbData, "|");
// console.log(parsedCsv);

var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    var sql = "INSERT INTO customers (column1, column2, column3, column4 ,column5) VALUES ?";
    con.query(sql, [parsedCsv], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    con.destroy();
      
    });
  });