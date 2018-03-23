const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const UserMessageSchema = new Schema({
    
    conversationId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    body:{
        type: String,
        required:true
    },
    author:{
        type: Schema.Types.ObjectId,
        required:true,
    }},
    {
        timestamps: true,
    }) 



module.exports = mongoose.model('UserMessage',UserMessageSchema)