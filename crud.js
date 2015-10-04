var conexaoClient = require('./database')();

module.exports = function() {

    var _DeletaECriaTabela = function() {
        conexaoClient.query("DROP TABLE IF EXISTS emps");
        conexaoClient.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
    }();

    var _insert = function(req, res) {
        conexaoClient.query("INSERT INTO emps(firstname, lastname) VALUES ($1, $2)", ['A', '1'],
            function(err, result) {
                if (err) {
                    console.error('Occoreu um problema no insert ', err);
                }
                res.write('Create');
                res.end(JSON.stringify(result));
          });
    };

    var _list = function(req, res) {
        var query = conexaoClient.query("SELECT firstname, lastname FROM emps ORDER BY lastname, firstname",
            function(err, result) {
                if (err) {
                    console.error('Occoreu um problema no select ', err);
                }
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('List');
                res.end(JSON.stringify(result.rows));
        });
    };

    var _update = function(req, res) {
        var query = conexaoClient.query("UPDATE emps set firstname='ALTERADO' WHERE firstname='A' and lastname='1'",
            function(err, result) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('Update');
                res.end(JSON.stringify(result));
        });
    };

    var _delete = function(req, res) {
        var query = conexaoClient.query("DELETE FROM emps WHERE lastname='1'",
            function(err, result) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('Delete');
                res.end(JSON.stringify(result));
        });
    };

  return {
      insert_records: _insert,
      list_records: _list,
      update_records: _update,
      delete_record: _delete
  };
};
