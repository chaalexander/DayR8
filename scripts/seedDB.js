const mysql = require("mysql");


var connection = mysql.createConnection(
  process.env.NODE_ENV === "production" ? process.env.JAWSDB_URL :
{
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "dayr8"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("INSERT INTO feelings (`title`, `emotion`, `notes`) VALUES ('Today', 'happy', 'I felt up because this brightened my day') , ('Yesterday', 'anxious', 'My anxiety was triggered by Karens actions')" ,
      (err, results) => {
      if (err) throw (err); 
      console.log(results)
        connection.end();
     }
)});
  