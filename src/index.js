const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const { format } = require('timeago.js');
const uuid = require('uuid');




//config
app.set('port', process.env.PORT || 3000);

//database
const URI = 'mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/ligacn?retryWrites=true&w=majority';
mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));   


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// Multer Middlwares - Creates the folder if doesn't exists
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).array('image', 20));



// Global variables
app.use((req, res, next) => {
    app.locals.format = format;
    next();
});


//routes
app.use('/api', require('../src/routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));


//server
app.listen(app.get('port'), ()=>{
    console.log('Servidor 33legaue-webmain en puerto ', app.get('port'));
})
