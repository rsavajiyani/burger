var connection = require('./connection.js');

var orm = {
    all: function(table, data){
        connection.query('Select * from ' + table + ';', function(err, result) {
            if (err) throw err;
            data(result);
        })
    },

    update: function(table, id, callback){
        connection.query('UPDATE ' + table + ' SET devoured=true WHERE id=' + id + ';', function(err,result){
            if (err) throw err;
            callback(result);
        })
    },

    create: function(table, val, cb){
        connection.query('INSERT INTO ' + table + "(burger_name) VALUES ('" + val + "');", function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;