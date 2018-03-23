const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const UserMessageSchema = new Schema({
    
    conversationId:{
        type: Schema.Types.ObjectId,
        required: false
    },
    body:{
        type: String,
        required:true
    },
    author:{
        authorId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
    }},
    {
        timestamps: true,
    }) 



module.exports = mongoose.model('UserMessage',UserMessageSchema)