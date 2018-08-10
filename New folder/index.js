var express = require('express');
var app = express();
var myParser = require("body-parser");
var mysql = require('mysql');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(myParser.urlencoded({ extended: true }));



var server = require('http').createServer(app);
server.listen(process.env.PORT || 3000);
console.log('server running at 3000');

app.get('/register', function (req, resp) {
    console.log("in register url");
    if (req.url === "/register") {
         resp.sendFile(__dirname + '/index.html');
    }
});

app.post('/register', function (req, resp) {
    //resp.end(JSON.stringify(req.body));
    console.log("in the register method");
    var l_name = req.body.cust_name_registerform;
    //console.log(l_name);
    var l_username = req.body.cust_username_registerform;
    var l_email = req.body.cust_email_registerform;
    var l_mobileno = req.body.cust_mobileno_registerform;
    var l_pwd = req.body.cust_pwd_registerform;
    console.log(l_name);  
   
{
   var users={
    "stat":'stat1',
    "colorid": 'red',
    "colorcode":'red'
      } 

   // console.log(stat);
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "nodedb"
      });
      //var status= true;
      con.connect(function(err) {
       if (err) throw err;      
       con.query("insert into  table1  set ?",users,function(err, results, fields){
         if (err) throw err;
         console.log(results);
         console.log("in the register");
         resp.redirect('/viewtable');
     }); 
});
}
});




app.get('/viewtable', function (req, resp) {
    console.log("in viewtable url");
    if (req.url === "/register") {
       //  resp.sendFile(__dirname + '/index.html');
       {
        agent123='online';
          const pool = mysql.createPool({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'nodedb'
        });
        //let sql ='SELECT * FROM productDescription';
        //let sql =  +'unresolved' ;
        pool.query('SELECT * FROM table1', (err, res, cols)=>{
          if(err) throw err;
          if(res == false){
            console.log("in the outer else");
            resp.redirect('/noprod');
          }
          else{
          values = res;
          idd=values[0].ID;
          console.log(values);
          resp.render('welcomeexecutive.ejs',{
                stat: values[0].stat,
                colorid: values[0].colorid,
                colorcode: values[0].colorcode,     
          });
        }
          //console.log(res);
        });
        console.log("------------------------------------------------");
      // console.log(values);
      /*
       */
      }
    }
});