const db = require ("../../../models");
const crypto = require ("crypto");
class Authctrl {
    static login (req, res){
        //parse body
        db.tenant.findOne({"email": req.body.email})
        .then( resp => {
            const hashToValidate = Authctrl._generateHash(req.body.password, resp.hash);
            if(hashToValidate === resp.hash){
                //login success
                res.send("good job");
            }else{
                //bad pass
                res.send("oops");
            }
        }).catch(err => {
            console.error(err);
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
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            address: req.body.address,
            PhoneNumber: req.body.PhoneNumber,
            email: req.body.email,
            salt: salt,
            hash: hash
        };

        const manager = {
            FirstName: req.body.FirstName,
            LastName:req.body.LastName,
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
        return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
    }

    static _generateSalt() {
        return crypto.randomBytes(16).toString("hex");
    }
}


module.exports = Authctrl;