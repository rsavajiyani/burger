var orm = require('../config/orm.js');

var burger = {
    all: function(data){
        //calls the function stored in the all property of the orm object in orm.js
        orm.all('burgers', function(response){
            data(response);
        })
    },
    update: function(id, data){
        //calls the function stored in the update property of the orm object in orm.js
        orm.update('burgers',id,data);
    },

    create: function(name, cb){
        //calls the function stored in the create property of the orm object in orm.js
        orm.create('burgers',name,cb);
    }
}

module.exports = burger;