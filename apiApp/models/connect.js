const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-Shop').then(()=>{
    console.log("database connection established");
}).catch(err => console.log(err) );