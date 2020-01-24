const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(!err){console.log('MONGODB Connection Successfull');}
    else{console.log('error in connection Mogodb'+JSON.stringify(err,undefined,2));}
});

require('./user.model');