const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const UserConversationSchema = new Schema({
    participants:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    conversationId: {
        type: Schema.Types.ObjectId,
        //required: true,
    },


});


module.exports = mongoose.model('UserConversation',UserConversationSchema);