const path = require("path");
const router = require("express").Router();
const db = require('../models/');






//Creats a new manager
router.post('/create',function(req,res){
    console.log('post /user')
    var newUser = new db.User({

        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountStatus: req.body.accountStatus
    });


    newUser.save(function(err, response){
        if (err) console.error(err);
        res.json(response);
    })
    


})


//Get User information
router.get('/read', function(req,res){
    console.log(req.query.id)
    var id = req.query.id;



    db.User.findById(id, function(err,result){
        if(err) console.error(err);
        res.json(result)
    })

    console.log('get /user with ObjectId:'+req.query.id)
});



//Update User by ID
router.put('/update', function(req,res){
    
    var id = req.body.id;

    db.User.findByIdAndUpdate(id, { 
        $set: {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            accountStatus: req.body.accountStatus,
        }},
        {
            upsert:true
        },
        function (err, user){
          if(err) console.error(err);
          return res.json(user);
        }
      );


    console.log('put /user with ObjectId: '+id)
})




router.delete('/delete', function(req,res){


    console.log('/delete ObjectId')
})



module.exports = router;