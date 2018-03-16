const db = require ("../../models");
const crypto = require ("crypto");
const jwt = require("jsonwebtoken");


class Authctrl {
    static login (req, res){
        let userType = ""
        // if(tenant){
        //     userType = "tenant";
        // }else{
        //     userType = "manager";
        // }

        

        db.user.findOne({"email": req.body.email})
        .then( resp => {
            console.log(resp);
            
            console.log("this is hash:------------------");
            
            console.log(req.body);
            console.log("this is hash:------------------");
            console.log(req.body.password);
            
            const hashToValidate = Authctrl._generateHash(req.body.password, resp.hash);
            if(hashToValidate === resp.hash){
                //login success
                res.send("good job");
                const token = Authctrl._generateJWT(resp);
                res.json({token: token});
            }else{
                //bad pass
                res.status(400).json("Incorrect Password")
            }
        }).catch(err => {
            console.error(err);
            res.status(400).json(`User: ${req.body.email} not found.`);
        });


        //check if hash is match 

        //return JWT

    }

    static register (req, res){
        //create salt
        const salt = Authctrl._generateSalt();
        
        //create hash
        const hash = Authctrl._generateHash(req.body.password, salt);

        //create tenant object
        // const tenant = {
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     address: req.body.address,
        //     phoneNumber: req.body.phoneNumber,
        //     email: req.body.email,
        //     salt: salt,
        //     hash: hash,
        //     accountStatus: req.body.accountStatus
        // };

        // const manager = {
        //     firstName: req.body.firstName,
        //     lastName:req.body.lastName,
        //     email: req.body.email,
        //     salt: salt,
        //     hash: hash,
        //     accountStatus: req.body.accountStatus
        // };

        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            salt: salt,
            hash: hash,
            accountStatus: req.body.accountStatus
        };

        // if (tenant.accountStatus === "tenant" ){
            console.log(`I'm a ${user.accountStatus}`)
            //insert into DB
            db.user.create(user)
            .then(resp => {
                res.json({
                    msg: `User : ${user.email} created.`
                })
            }).catch(err => {
                res.status(400).json(err);
                console.error(err);
            });
            
            //return response
        // }
        // else{
        //     console.log(`I'm a ${manager.accountStatus}`)           
        //     db.manager.create(manager).then(resp => {
        //         res.json({
        //             msg: `Manager : ${manager.email} created.`
        //         })
        //     }).catch(err => {
        //         res.status(400).json(err);
        //         console.error(err);
        //     });
            
        // };


    };

    static _generateHash(password, salt) {
        console.log(password);
        console.log(salt);
        return crypto.pbkdf2Sync(password.toString("hex"), salt, 10000, 64, "sha512").toString("hex");
    }

    static _generateSalt() {
        return crypto.randomBytes(16).toString("hex");
    }

    static _generateJWT(user) {
        const expTime = new Date();
        expTime.setDate(expTime.getDate() + 7);
        return jwt.sign({
            userID: user._id,
            email: user.email,
            exp: parseInt(expTime.getTime()/1000)
        }, process.env.JWT_SECRET);
    }
}


module.exports = Authctrl;