const db = require ("../../models");
const crypto = require ("crypto");
const jwt = require("jsonwebtoken");


class Authctrl {
    static login (req, res){
        
        db.tenant.findOne({"email": req.body.email})
        .then( resp => {
            console.log(resp);
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
            res.status(400).json(`Tenant: ${req.body.email} not found.`);
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
        const tenant = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            salt: salt,
            hash: hash
        };

        const manager = {
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            salt: salt,
            hash: hash
        };

        //insert into DB
        db.tenant.create(tenant)
        .then(resp => {
            res.json({
                msg: `Tenant : ${tenant.email} created.`
            })
        }).catch(err => {
            res.status(400).json(err);
            console.error(err);
        });

        db.manager.create(manager).then(resp => {
            res.json({
                msg: `Manager : ${manager.email} created.`
            })
        }).catch(err => {
            res.status(400).json(err);
            console.error(err);
        });

        //return response


    }

    static _generateHash(password, salt) {
        return crypto.pbkdf2Sync(password.toString("hex"), salt, 10000, 64, "sha512").toString("hex");
    }

    static _generateSalt() {
        return crypto.randomBytes(16).toString("hex");
    }

    static _generateJWT(tenant) {
        const expTime = new Date();
        expTime.setDate(expTime.getDate() + 7);
        return jwt.sign({
            email: user.email,
            exp: parseInt(expTime.getTime()/1000)
        }, process.env.JWT_SECRET);
    }
}


module.exports = Authctrl;