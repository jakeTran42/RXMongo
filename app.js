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



app.get('/', (req, res) => {
    res.render('index')
});



require('./controllers/medications.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});
