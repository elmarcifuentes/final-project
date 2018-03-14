var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManagerSchema = new Schema({

    //keep all names lower case for consistency
    username:{
        lowercase: true,
        required: true,
        type: String,
        unique: true
    },
    first_name: {
        lowercase: true,
        required: true,
        type: String
    },
    middle_name:{
        lowercase: true,
        required: false,
        type: String
    },
    last_name:{
        lowercase: true,
        required: true,
        type: String
    },
    birth_date: {
        type: Date,

    },
    address: {
        type: Object,

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
var Manager = mongoose.model('Manager',ManagerSchema);
module.exports = Manager;