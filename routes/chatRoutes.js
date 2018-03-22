const path = require("path");
const router = require("express").Router();
const db = require('../models/')






// With the schemas created, we can start creating our API endpoints,
// which will allow us to
// SEND, DELTE, EDIT AND VIEW messages


//1. Be able to get conversationsId for all conversations a single user has.
//'Knowing' who that single user is is something that I got to work with Jason with
//, because he made the authentication routes.

//2. Given a conversationId for a single conversation, be able to retrieve
//the entire conversation, which should be an array of message JSON objects

//3. ???? I'll figure this out when I am here.


//This needs a lot of work because it has to utilize an authetnticated user
router.get('/getConversations', function(req,res){
    console.log('/getConversations called')
//console.log(req.user)
    //somehow, this call needs to be able to get the user's id. However the authentication works, this must work with it.
    var id = req.query.id;
    
    db.UserConversation.find({
        //
    }, function(err,response){
        if (err) console.error(err);

        let fullConversations = [];
      response.forEach(function(conversation) {
        db.UserMessage.find({ 'conversationId': response._id })
          .sort('-createdAt')
          .limit(1)
          .populate({
            path: "author",
            select: "profile.firstName profile.lastName"
          })
          .exec(function(err, message) {
            if (err) {
              res.send({ error: err });
              return next(err);
            }
            fullConversations.push(message);
            if(fullConversations.length === response.length) {
              return res.status(200).json({ response: fullConversations });
            }
          });
      });
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




router.post('/newConversation', function(req,res){
    console.log('post /newConversation')
    console.log(req)



})





module.exports = router;