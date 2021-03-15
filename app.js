const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const bookListRoutes = require('./controllers/route/bookListRoute');

app.get('/',(req,res)=>{
    res.send("hello bi")
});

//cerate routes

app.use('/api/Books',bookListRoutes);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});