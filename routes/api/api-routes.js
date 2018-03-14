const path = require("path");
const router = require("express").Router();

const db = require('../../models/')




//Creats a new manager
router.post('/manager',function(req,res){
    console.log('post /manager')
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


//Create a new tenant
router.post('/tenant',function(req,res){
    console.log('post /tenant')
    var newTenant = new db.Tenant({

        username:req.body.username,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    });

    newTenant.save(function(err, response){
        if(err) console.error(err);
        res.json(response)
    })


})



router.get('/manager', function(req,res){
    Manager.find().then()
    console.log('get /manager')

    
    
});


router.get('/tenant', function(req,res){
    console.log('get /tenant')


    
});





module.exports = router;