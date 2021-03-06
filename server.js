var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//Pages
var index = require('./routes/index');
var profilePage = require('./routes/profilePage');
var login = require('./routes/login');
var trackerCreator = require('./routes/trackerCreator');
var dummyClock = require('./routes/dummyClock');
var signup = require('./routes/signup');
var tag = require('./routes/tag');
var viewDetails = require('./routes/viewDetails');
// Adding to form code
var trackerEditor = require('./routes/trackerEditor');
var add = require('./routes/add');
// Signing Up
var submitSignUp = require('./routes/submitSignUp');

var app = express();

//Routes
app.get('/',index.view);
app.get('/home', index.view2);
app.get('/profilePage', profilePage.view);
app.get('/login', login.view);
app.get('/trackerCreator', trackerCreator.view)
app.get('/trackerCreator/:id', trackerCreator.generate);
app.get('/dummyClock', dummyClock.view);
app.get('/signup', signup.view);
app.get('/tag/', tag.view);
app.get('/tag/:tag', tag.generate);
app.get('/viewDetails/', viewDetails.view);
app.get('/viewDetails/:id', viewDetails.generate);

// Adding to form code
app.get('/trackerEditor', trackerEditor.view);
app.get('/add', add.addFriend);
//app.get('/add', trackerEditor.view);

app.get('/submitSignUp', submitSignUp.signUp);


app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));

var PORT = 3000;
var port = process.env.PORT || PORT;

app.listen(port,function(){
  console.log('Server running on port %s',port);
});