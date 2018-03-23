const mongoose = require("mongoose");
const path = require("path");
const router = require("express").Router();
const db = require('../models/');



const authRoutes = require('./authRoutes');


// With the schemas created, we can start creating our API endpoints,
// which will allow us to
// SEND, DELTE, EDIT AND VIEW messages



//0. Be able to create a conversation between two users, Alice and Bob.
//

//1. Be able to get conversationsId for all conversations a single user has.
//'Knowing' who that single user is is something that I got to work with Jason with
//, because he made the authentication routes.

//2. Given a conversationId for a single conversation, be able to retrieve
//the entire conversation, which should be an array of message JSON objects

//3. ???? I'll figure this out when I am here.


//This needs a lot of work because it has to utilize an authetnticated user
router.get('/:userId', function(request,response){
    console.log('/chat/userId OR getConversations called, retrieving list of conversations given userId')
    
    var userId = request.params.userId.split('=')
    userId = userId[1]
    
    console.log('userId: '+userId)
    //somehow, this call needs to be able to get the user's id. However the authentication works, this must work with it.
    
    db.UserConversation.find({
        participants: mongoose.Types.ObjectId(userId)
    }, function(err,res){
        if (err) {
          console.error(err);
        }

        else 
        console.log(res)

        response.json(res)
        let fullConversations = [];
      // res.forEach(function(conversation) {
      //   db.UserMessage.find({ 'conversationId': response._id })
      //     .sort('-createdAt')
      //     .limit(1)
      //     .populate({
      //       path: "author",
      //       select: "profile.firstName profile.lastName"
      //     })
      //     .exec(function(err, message) {
      //       if (err) {
      //         res.send({ error: err });
      //         return next(err);
      //       }
      //       fullConversations.push(message);
      //       if(fullConversations.length === response.length) {
      //         return res.status(200).json({ response: fullConversations });
      //       }
      //     });
      // });
            //res.json(response)
    })
})



// Retrieve single conversation
// chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);

//Actually use the parameters in the url for retrieving the speicific single conversation
//
router.get('/:conversationId', function(req,res){
    console.log('/getConversation called')
    console.log(req)



})






//Make a conversation, a function that utilizes the message objects to build
//conversations
router.post('/newConversation/:recipient', async function(request,response){
    console.log('post /newConversation/:recipient called OR createConversation')



    var recipientId = request.params.recipient.split('=')[1];
    console.log('request.params.recipient: '+recipientId);
    //supposedly we grab the JWT instead,
    //but I am using fakeUserTokens for now to represent an authenticated user    
    var senderId = request.body.senderId;
    console.log('senderId: '+senderId)



    //make sure that the there exists these two
    if(!senderId && !recipientId){

      response.status(400).json({message:'senderId or recipient are null'})
    }
    else{
      //Grabs sender user JSON, by the senderId given in the body
      //Grabs recipient user JSON, by recipientId given in URL params
      const recipientRequest = await db.User.findById(recipientId);
      const senderRequest = await db.User.findById(senderId)
      
      console.log('id of Sender: '+senderRequest._id)
      console.log('id of Recipient: '+recipientRequest._id)

      //If no conversation found, make a new one
      //There is no if, this entire post function should only run if that is the case
      db.UserConversation.create({
          participants: [senderId,recipientId]
      }).then(function(conversation,err){
        if(err){
          response.json({error:err})
          console.error(err)

        }
          console.log('conversation created with a conversationId: '+conversation._id)
        //response.json({conversationId: conversation._id})

        
        //create the user message
        db.UserMessage.create({
            conversationId: conversation._id,
            body:request.body.body,
            author:{
              authorId:senderRequest._id,
              firstName: senderRequest.firstName,
              lastName: senderRequest.lastName,
            }
        }).then(function(message,err){

          if (err){

            console.error('newMessage.save error: '+err);
            response.json(err)
          } else{ 
            
            response.json(message)
          }

        })

      });

    }
      
})    





module.exports = router;