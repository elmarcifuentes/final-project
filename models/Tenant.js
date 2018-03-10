var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantSchema = new Schema({

    firstName: String,
    middleName: String,
    lastName: String,
    birthDate: Date,
    address: String

    //much, much more validation is required for each of these key values. 
    //require first and last names



})



//this is the actual model that works with mongoose.
//the schema is different, the schema is amore universal thing.
var Tenant = mongoose.model('Tenant',TenantSchema);
module.exports = Tenant;