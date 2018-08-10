
var methods={};
var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var express = require('express');
var app = express();
var myParser = require("body-parser");
var sessions=require("express-session");
var session = require('express-session')
const boolean = require('boolean');
var cookieParser = require('cookie-parser');
app.use(myParser.urlencoded({extended : true}));
redirect = require("express-redirect");
var path = require("path");
//var flash = require('connect-flash');
var pwdd;
var status=true;
var nodemailer = require('nodemailer');
var formidable = require('formidable');
var multer  = require('multer');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.set('view engine', 'html');
var dal=require('./dal.js');
var rn = require('random-number');