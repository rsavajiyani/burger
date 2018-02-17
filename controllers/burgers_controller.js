var express = require('express');
var app = express.Router();
var burger = require('../models/burger.js')

app.get('/', function(req, res){
    burger.all(function(data){
        res.render('index', {data});
    }) 
})

app.post('/burgers/update', function(req, res){
    console.log(req);
    //calls burger.update in burger.js with burger_id from index.handlebars
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

app.post('/burgers/create',function(req, res){
    console.log(req);
    //calls burger.create in burger.js with burger_name from index.handlebars
    burger.create(req.body.burger_name, function(result) {
        res.redirect('/');
    })
})

module.exports = app;