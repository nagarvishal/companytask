
const userservice = require('../services/user.service');

class UserController
{
    async getUser(req,resp){
        try{

        }catch(e){

        }
    }

    
    async creatUser(req, resp){
        try{
            let response = await userservice.creatUser(req.body);
            return resp.json({error:false,data:response});
        }catch(e){
            console.log(e);
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
    async updateUser(req,resp){
        try{
            let userid = req.profile._id;

            let response = await userservice.updateUser(req.body,userid);
            return resp.json({error:false,data:response});

            
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
    async deleteUser(req,resp){
        try{
            let userid = req.profile._id;
            let response = await userservice.deleteUser(userid);

            return resp.json({error:false,data:response});
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }

    async loginuser(req,resp){
        try{
            const response = await userservice.loginUser(req.body);
            return resp.json({error:false,data:response});
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }

}

module.exports = new UserController();