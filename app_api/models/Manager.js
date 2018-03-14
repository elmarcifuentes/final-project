const mongoose = require('mongoose');
const managerSchema = new mongoose.Schema ({
    firstName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: String},
    email: {
        type: String,
        unique: true,
        required: true
    },
    salt: {
        type: String,        
        required: true
    },
    hash: {
        type: String,        
        required: true
    }

});



//this is the actual model that works with mongoose.
//the schema is different, the schema is amore universal thing.
var manager = mongoose.model('manager', managerSchema);
module.exports = manager;