const express = require('express')
const app = express()
const path = require('path');
var methodOverride = require('method-override')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


const hbs = require('express-handlebars');

app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs')
app.use(express.static(__dirname));
app.use(express.static('./public'));
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/RxControl');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(cookieParser());


// Index Navigation
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/signup', (req, res) => {
    res.render('reg-selection')
});

app.get('/login', (req, res) => {
    res.render('login-form')
});

app.get('/new/pharmacist', (req, res) => {
    res.render('phar-reg-form')
});

app.get('/new/doctor', (req, res) => {
    res.render('doc-reg-form')
});


require('./controllers/medications.js')(app);
require('./controllers/patients.js')(app);
require('./controllers/viewpatients.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});
