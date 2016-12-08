
 var express    = require("express");
 var bodyParser = require("body-parser");
 var http       = require("http");
 var logger     = require("morgan");
 var path       = require("path");
 var app        = express();
 //var jwt        = require('express-jwt');
 //var rsaValidation = require('auth0-api-jwt-rsa-validation');

 app.use(logger('dev'));
 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({ extended: false }));
 
 /*
 var jwtCheck = jwt({
  secret: rsaValidation()
});
 app.use(jwtCheck);

*/

  app.get('/',function(req,res){
 	res.sendFile(path.join(__dirname + '/index.html'));
 });

/*
  app.post('/login' , function(req, res){
 	var username = req.body.uName;
 	var password =	req.body.pass;

 	console.log("Username was "+username+" Password was "+password);
 	res.send(username+" : "+password);
 });
*/

app.get('*' ,function(req,res){
 	res.status(404).send('404 Error Page');
 });

/*
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({message:'Missing or invalid token'});
  }
});
*/

var server = http.createServer(app);
server.listen(4884,function(){
	console.log("Server started working.. ");
});