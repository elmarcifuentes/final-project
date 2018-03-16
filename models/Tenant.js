var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantSchema = new Schema({

    
    
    
    tenantId:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    //keep all names lower case for consistency
    username:{
        lowercase: true,
        required: true,
        type: String,
        unique: true
    },
    first_name: {
        required: true,
        type: String
    },
    middle_name:{
        required: false,
        type: String
    },
    last_name:{
        required: true,
        type: String
    },
    birth_date: {
        type: Date,

    },
    address: {
        type: Object,
        street_address: String,
        city: String,
        state: String,
        zip_code: String,
        //zip, like phone, might need to be a number and have proper validation for that. 
    },

    phone:{
        type: String,
        validate: function(v){
            //validate so that it must be a 10-digit number
        }
    }

    //much, much more validation is required for each of these key values. 
    //require first and last names



})



//this is the actual model that works with mongoose.
//the schema is different, the schema is amore universal thing.
var Tenant = mongoose.model('Tenant',TenantSchema);
module.exports = Tenant;