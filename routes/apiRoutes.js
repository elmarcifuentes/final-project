const path = require("path");
const router = require("express").Router();

const db = require('../models/')




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
    console.log(req.query.id)
    var id = req.query.id;

    //Still neeed to get this to work.
    db.Manager.findById(id, function(err,result){
        if(err) console.error(err);
        res.json(result)
    })

    
    console.log('get /manager with ObjectId:'+req.query.id)

});


router.get('/tenant', function(req,res){
    console.log(req.query.id)
    var id = req.query.id;

    db.Tenant.findById(id, function(err,result){
        if(err) console.error(err);
        res.json(result)
    })


    console.log('get /tenant with ObjectId:'+req.query.id)
});


router.put('/tenant', function(req,res){
    //console.log(req.body)
    var id = req.body.id;

    db.Tenant.findByIdAndUpdate(id, { 
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

    


    console.log('put /tenant with ObjectId:'+id)
})

router.put('/manager', function(req,res){
    
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


    console.log('put /manager with ObjectId: '+id)
})




module.exports = router;