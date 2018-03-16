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
    console.log(req.params)
    var id = req.headers._id;

    //Still neeed to get this to work.
    db.Manager.findById("5aa8915f1006827ad7dd60e8", function(err,result){
        //if(err) console.error(err);
        res.json(result)
    })

    
    console.log('get /manager'+req.body._id)

});


router.get('/tenant', function(req,res){
    console.log('get /tenant')


    
});


router.put('tenant', function(req,res){
    console.log('put /tenant')
})

router.put('manager', function(req,res){
    console.log('put /manager')
})





module.exports = router;