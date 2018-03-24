// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//     firstName: {type: String},
//     lastName: {type: String},
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     address: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     salt: {
//         type: String,        
//         required: true
//     },
//     hash: {
//         type: String,        
//         required: true
//     },
//     accountStatus: {
//         type: String,
//         required: true
//     }

// });



// //this is the actual model that works with mongoose.
// //the schema is different, the schema is amore universal thing.
// const userModel = mongoose.model('User',userSchema);
// module.exports = userModel;