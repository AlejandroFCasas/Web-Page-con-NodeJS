
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('json spaces', 2);


app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);



// middlewares
app.use(morgan('dev'));
//app.use(morgan('combined')); mas detalle en los mensajes
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes
app.use(require('./routes'));

/*


app.use(require('./routes/index.js'));

app.use('/api/movies',require('./routes/movies'));
app.use('/api/users', require ('./routes/users'));


*/ 

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server


const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
