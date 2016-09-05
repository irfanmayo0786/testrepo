/**
 * Created by NGTricks on 11/18/2015.
 * Author : Babar Bilal
 */

var express = require("express");
var bodyParser = require("body-parser");
var busboy = require("connect-busboy");
var multer  = require('multer');
//var upload = multer({ dest: 'uploads/' });
var upload = multer({ dest: 'uploads/' }).single('avatar');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended : true, limit: '50mb' }));
app.use(busboy());
app.use(function(req, res, next){
    req.baseURL = __dirname;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/uploads", express.static(__dirname + "/uploads"));


var http = require("http").createServer(app);
//var socket = require("socket.io")(http);

//var socketHandle = require("./modules/socket/socket")(socket);

app.use("/", require("./modules/routes"));
http.listen(3000);
http.timeout = 1000 * (60 * 10);
console.log("App is running on port 3000");