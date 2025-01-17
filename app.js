const express = require('express');

const app = express();
//routing 

//set templating as ejs
app.set('view engine', 'ejs')

//static files
app.use(express.static('public'));

//route for  /
app.get('/' , (req, res) => {
 res.render('home');
});

app.get('/front', (req, res) => {
    res.render('front')
});

app.get('/help', (req, res) => {
    res.render('help')
});




//create a server 
app.listen(3000,() => console.log('server is running'));


