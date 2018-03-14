const mongoose = require('mongoose');
const ManagerSchema = new mongoose.Schema ({
    FirstName: {type: String},
    LastName: {type: String},
    PhoneNumber: {type: String},
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Salt: {
        type: String,        
        required: true
    },
    Hash: {
        type: String,        
        required: true
    }

});



//this is the actual model that works with mongoose.
//the schema is different, the schema is amore universal thing.
var Manager = mongoose.model('Manager',ManagerSchema);
module.exports = Manager;