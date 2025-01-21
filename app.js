const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();


//routing 
//set templating as ejs
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//database url
const url = 'mongodb+srv://mancotywap:X9K28PQ0Atlm9one@atodolist.s8ptb.mongodb.net/?retryWrites=true&w=majority&appName=aTodolist'
//connnecting application with database
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Mongo DB Connected"))
.catch( err => console.log(err));

//import task model
const task = require('./models/tasks');

//static files
app.use(express.static('public'));

//route for  /
app.get('/' , (req, res) => {
 res.render('home');
});

//route for front page
app.get('/front', (req, res) => {
    res.render('front')
});

app.get('/help', (req, res) => {
    res.render('help')
});

//route for add page
app.get('/ADD',(req,res)=>{
    res.render('Add')
})

//ROUTE FOR SAVING DATA
app.post('/add-tasks',(req, res)=>{

    //save data on database
    const data = new task({
       title:req.body.title,
       description:req.body.description
    })

    data.save().then(()=>{
        res.redirect('/tasks');
    }).catch(err =>console.log(err));

})

//create a server 
app.listen(3000,() => console.log('server is running'));


