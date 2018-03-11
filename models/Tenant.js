const mongoose = require('mongoose');
const TenantSchema = new mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Address: {
        type: String,
        unique: true,
        required: true
    },
    PhoneNumber: {
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
var Tenant = mongoose.model('Tenant',TenantSchema);
module.exports = Tenant;