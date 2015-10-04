var http = require('http');
var crud = require('./crud')();
var port = '3001';
var host = 'localhost';

var app = http.createServer(function(req, res) {
    if(req.method === 'POST') {
        crud.insert_records(req, res);
    } else if(req.method === 'GET') {
        crud.list_records(req, res);
    } else if(req.method === 'PUT') {
        crud.update_records(req, res);
    } else if(req.method === 'DELETE') {
        crud.delete_record(req, res);
    }
});

app.listen(port, host, function() {
  console.log("porta %d no host %s ", port, host);
});
