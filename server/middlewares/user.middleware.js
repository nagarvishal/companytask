
const commonservice = require('../services/utils/common.service');

class UserMiddleware
{
    authentication(req,resp,next){

        try{
            const token = req.headers.token;
            const object = commonservice.verifyToken(token);
            req.profile = {...object};
            console.log("req.profile=>",req.profile);
            next();

        }catch(e){
            if(e.name=="TokenExpiredError"){
                resp.status(501).json({error:true,data:{message:"Token Got expired"}});
            }
            resp.status(401).json({error:true,status:401,data:e});
        }
    }
}

module.exports = new UserMiddleware();