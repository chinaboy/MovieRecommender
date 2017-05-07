var express = require("express");
var path = require("path");
var http =require("http");
var app = express();
var zmq = require("zeromq"), sock = zmq.socket("push");

sock.bindSync('tcp://127.0.0.1:3000');


app.use( express.static(__dirname ));
app.use( express.static(__dirname + "/img"));
app.use( express.static(__dirname + "/app"));


app.get("/", function(req, res){
    res.sendFile('app/index.html', { root: __dirname });
    });

app.get("/randommovies", function(req, res){
    sock.send("user_id:random_movies")  
    res.end("not implemented yet")
    });

http.createServer(app).listen(8000);
