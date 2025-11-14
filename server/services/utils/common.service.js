
const jwt = require('jsonwebtoken');
const secretkey = "dkshdfls234924723ksdklsfn9237489234ksfbkf";

class CommonService
{
    generateToken(user){
        let object = {
            _id:user._id,
            username:user.username
        }
        return jwt.sign(object, secretkey, {
            expiresIn: "10m",
        });
    }

    verifyToken(token){
        const payload = jwt.verify(token,secretkey);
        return payload;
    }
    

    
}

module.exports = new CommonService();