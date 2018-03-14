//This is used just to link the rest of the api stuffs.


const router = require("express").Router();


    router.get('testing',function(){

        console.log('/testing called')
    })



//Do regular api calls go here?
//Why are there two index.js in /routes?
module.exports = router;