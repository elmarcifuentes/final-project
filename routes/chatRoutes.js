const path = require("path");
const router = require("express").Router();
const db = require('../models/')




// With the schemas created, we can start creating our API endpoints,
// which will allow us to
// SEND, DELTE, EDIT AND VIEW messages


router.get('/getConversations', function(req,res){
    console.log(req.query.id)
    var id = req.query.id;
    
    db.UserConversation.findById(id, function(req,response){
        if (err) console.error(err);
        res.json(response)
    })
})






module.exports = router;