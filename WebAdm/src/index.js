const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();
//const sass = require('./sassRender');

//sass('dev');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes/task'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Para todo trafico se envia el index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//General Error Handling Middleware
app.use((err, req, res, next) => {
    console.log('Unknown Source Error: ' + err);
    res.status(500).json({ status: 'error' });
});

// Starting the server
app.listen(app.get('port'), (err) => {
    if(err) {
        return console.log(err);
    }
    console.log(`Server on port: ${app.get('port')}`);
});
