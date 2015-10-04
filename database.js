var pg = require('pg');

module.exports = function () {

  var conexao = function() {
      var conString =  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5433/exemplo';
      var client = new pg.Client(conString);
      client.connect();
      return client;
  };

  return conexao();
};
