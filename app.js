var express = require("express");
var path = require("path");
var http =require("http");
var amqp = require('amqplib');
var app = express();

app.use( express.static(__dirname ));
app.use( express.static(__dirname + "/img"));
app.use( express.static(__dirname + "/app"));


amqp.connect('amqp://localhost').then( function( conn) {
  conn.createChannel(function(err, ch) {
  	var user_id = 'kelsey';
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer.from(user_id));

  });
});

app.get("/", function(req, res){
    res.sendFile('app/index.html', { root: __dirname });
    });

app.get("/randommovies", function(req, res){
     
    res.end("not implemented yet")
    });

http.createServer(app).listen(8000);
