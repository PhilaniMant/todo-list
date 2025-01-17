const express = require('express');

const app = express();
//routing 

//set templating as ejs
app.set('view engine', 'ejs')

//route for  /
app.get('/' , (req, res) => {
 res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/front', (req, res) => {
    res.render('front')
});

//create a server 
app.listen(3000,() => console.log('server is running'));


