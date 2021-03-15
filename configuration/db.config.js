const mysql = require('mysql');

//connection

const dbConnect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'task1_api'
});

dbConnect.connect((err)=>{
    if (err){
        console.log(err);
    }else{
        console.log('db connected success');
    }
});

module.exports = dbConnect;