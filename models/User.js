var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    
    //keep all names lower case for consistency
    username:{
        lowercase: true,
        required: true,
        type: String,
        unique: true
    },
    accountStatus:{
        required: true,
        type: String,
        enum:[
            'tenant','manager'
        ],
    },
    firstName: {
        required: true,
        type: String
    },
    middleName:{
        required: false,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    birthDate: {
        type: Date,

    },
    primaryAddress: {
        required: false,
        type: Object,
        streetAddress: String,
        city: String,
        state: String,
        zipCode: String,
        addressType:{
            type: String,
            required: false,
            enum:[
                'mailing','billing','work'
            ],
        }
        //zip, like phone, might need to be a number and have proper validation for that. 
    },

    phone:{
        type: String,
        validate: {
            validator: function(v){
                return /\d{3}-\d{3}-\d{4}/.test(v);
                //validate so that it must be a 10-digit number
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },

    profileImage:''

    //much, much more validation is required for each of these key values. 
    //require first and last names



})



//this is the actual model that works with mongoose.
//the schema is different, the schema is amore universal thing.
var User = mongoose.model('User',UserSchema);
module.exports = User;