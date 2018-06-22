var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'newrootpassword',
database:'test'


});
module.exports=connection;