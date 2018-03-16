var mongoose = require('mongoose');
var Schema = mongoose.Schema;





var UserConversationSchema = new Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required:true,
    },
    

    




});


module.exports = mongoose.model('UserConversation',UserConversationSchema);