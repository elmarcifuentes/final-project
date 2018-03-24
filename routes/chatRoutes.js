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
          res.status(500).json({error:err})
        }
        else {
          console.log(res)
          response.json(res)
          let fullConversations = [];
        }
    })
})



// Retrieve single conversation
// chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);

//Actually use the parameters in the url for retrieving the speicific single conversation
//
router.get('/conversation/:conversationId', function(request,response){

    var conversationId = request.params.conversationId.split('=')[1];
    console.log('conversationId: '+conversationId)
    

    db.UserConversation.findById(conversationId,function(error,result){

      if(error){
        console.error(error);
        response.status(400).json({error:error})
      } else {

        console.log(result)
        
        db.UserMessage.find({
          conversationId:mongoose.Types.ObjectId(conversationId)
        }).then(function(messageResults){


          //copy.paste  from stackoverflow for sorting by createdAt date
          //Array begins with oldest, then goes to newest message.
          messageResults.sort(function(a, b) {
            var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
            return dateA - dateB;
        });


          console.log('messageResults: '+messageResults)
          response.json(messageResults)
        }
        //grab all messages that have this
        
        
      )}
      
      //console.log(response);
    })
    
    
  })
  
  
  //Be able to reply to what some fool said to you.
  //Requires, body, senderId and recipientId
  //
  //
  router.post('/reply/:conversationId', function(request,response){
  
    console.log('POST /chat/reply/:conversationId CALLED')
    conversationId = request.params.conversationId.split('=')[1];
    console.log(conversationId);

    if (!conversationId){

      response.status(400).json({error: 'null conversationId'})

    }else{

      console.log(request.body)
  
    db.UserMessage.create({
    
      conversationId:mongoose.Types.ObjectId(conversationId),
      body:request.body.messageBody,
      author:{
          authorId:mongoose.Types.ObjectId(request.body.authorId),
          firstName: request.body.firstName,
          lastName: request.body.lastName,
      }
    },
      {
          timestamps: true,
      }, function(result){
        
          
          console.log(result)
          response.json(result)


      });
    //Grab the conversation, this is why GET /:conversationId is first
  
  
  
  
  
    }
  });


  
  
  
  
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