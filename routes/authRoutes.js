const path = require("path");
const router = require("express").Router();




router.get('/test', function(req,res){


    console.log('/test')
    res.json('test')
})



module.exports = router;