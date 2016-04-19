var Connection = require('tedious').Connection;
var mongoose = require('mongoose');
var rows = [];

//fake userName, password and server for security reason.
var config = {
  userName: 'XXXXXXXXXXXXXXXXXX',
  password: 'XXXXXXXXXXXXXXXXXX',
  server: '82.XXX.XXX.XXX' };

  var connection = new Connection(config);
  var Request = require('tedious').Request;

  connection.on('connect', function(err) {
    //Add error handling here
    if(err){
      console.log("Error connection");
    }
    else {
      {
        console.log("Connection successfully");
      };
    }
    getSqlData();
  });

     function getSqlData() {
        console.log('Getting data from SQL');
        request = new Request("SELECT * FROM Reuniones", function(err, rowCount)
        {
          if (err)
          {
            console.log(err);
          }
          else
          {
            console.log("Row count: " + rowCount);
          }
        });

        request.on('row', function(columns)
        {
          var row = {};
          columns.forEach(function(column)
          {
            row[column.metadata.colName] = column.value;
          });
          rows.push(row); });
          connection.execSql(request);
        }
