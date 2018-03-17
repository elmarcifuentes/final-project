const path = require("path");
const router = require("express").Router();

const db = require('../models/')




//Creats a new manager
router.post('/create',function(req,res){
    console.log('post /user')
    var newManager = new db.Manager({

        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    });


    newManager.save(function(err, response){
        if (err) console.error(err);
        res.json(response);
    })
    


})


//Get User information
router.get('/read', function(req,res){
    console.log(req.query.id)
    var id = req.query.id;

    db.Tenant.findById(id, function(err,result){
        if(err) console.error(err);
        res.json(result)
    })


    console.log('get /user with ObjectId:'+req.query.id)
});



//Update User by ID
router.put('/update', function(req,res){
    
    var id = req.body.id;

    db.Manager.findByIdAndUpdate(id, { 
        $set: {
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        }},
        {
            upsert:true
        },
         function (err, user){
          return res.json(true);
        }
      );


    console.log('put /user with ObjectId: '+id)
})




router.delete('/delete', function(req,res){


    console.log('/delete ObjectId')
})



module.exports = router;