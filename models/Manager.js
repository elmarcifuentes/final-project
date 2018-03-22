// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var ManagerSchema = new Schema({
    
    
    
//     // managerId:{
//     //     type: Schema.Types.ObjectId,
//     //     required: true,
//     // },


//     //keep all names lower case for consistency
//     username:{
//         lowercase: true,
//         required: true,
//         type: String,
//         unique: true
//     },
//     first_name: {
//         required: true,
//         type: String
//     },
//     middle_name:{
//         required: false,
//         type: String
//     },
//     last_name:{
//         required: true,
//         type: String
//     },
//     birth_date: {
//         required: false,
//         type: Date,

//     },
//     address: {
//         type: Object,

//     },

//     phone:{
//         type: String,
//         validate:{
//             validator:function(v){
//                 return /\d{3}-\d{3}-\d{4}/.test(v);
//             },
//             message: '{VALUE} is not a valid phone number!'

//         }
//             //validate so that it must be a 10-digit number
//     }

//     //much, much more validation is required for each of these key values. 
//     //require first and last names




// })



// //this is the actual model that works with mongoose.
// //the schema is different, the schema is amore universal thing.
// var Manager = mongoose.model('Manager',ManagerSchema);
// module.exports = Manager;