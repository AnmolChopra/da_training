let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');

let app = express();
app.use('/myimages',express.static('attach'));
app.use(cors());
app.use(bodyparser.json());

//                              Admin Login
app.post('/admlog',(req,res)=>{
    var conn = require('./controllers/controller');
    conn.adminLog(req,res);
});


//                              Teacher Login

app.post('/techlog',(req,res)=>{
    var conn = require('./controllers/controller');
    conn.TechLog(req,res);
});

app.post('/chpsel',(req,res)=>{
    var conn = require('./controllers/controller');
    conn.selchp(req,res);
})

app.post('/addtopic',(req,res)=>{
    var conn= require('./controllers/controller');
    conn.addtop(req,res);
})

app.get('/fetchtopic',(req,res)=>{
    var conn=require('./controllers/controller');
    conn.fetchTopic(req,res);
})


app.get('/fetchAll',(req,res)=>{
    var conn=require('./controllers/controller');
    conn.fetchAll(req,res);
})

app.post('/addteacher',(req,res)=>{
    var conn = require('./controllers/controller');
    conn.addteacher(req,res);
})

app.post('/addquiz',(req,res)=>{
    var conn= require('./controllers/controller');
    conn.addquuiz(req,res);
})

//                              Chapter  2 Starts

app.post('/addtopic2',(req,res)=>{
    var conn= require('./controllers/controller');
    conn.addtop2(req,res);
})

app.get('/fetchtopic2',(req,res)=>{
    var conn=require('./controllers/controller');
    conn.fetchTopic2(req,res);
})


app.get('/fetchAll2',(req,res)=>{
    var conn=require('./controllers/controller');
    conn.fetchAll2(req,res);
})


app.post('/addquiz2',(req,res)=>{
    var conn= require('./controllers/controller');
    conn.addquuiz2(req,res);
})

app.listen(process.env.PORT||1245,()=>{
    console.log("Running at localhost 1245")
})
