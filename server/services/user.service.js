
const usermodel = require('../models/user.model');
const bcrypt = require("bcryptjs");

const commonservice = require('./utils/common.service');


class UserService
{


    async updateUser(userdata,userid){
        const dbuserdata = await usermodel.findById(userid);
        if(dbuserdata){
            throw new Error("user is not system");
        }

        if(userdata.password){
            userdata.password = await bcrypt.hash(userdata.password);
        }

        const response = await usermodel.findByIdAndUpdate(userid,userdata);
        return response;

    }
    
    async deleteUser(userid){
        const response = await usermodel.findByIdAndDelete(userid);
        return response;
    }

    
    
    async creatUser(userdata){
        const username = userdata.username;
        let password = userdata.password;

        let user = await usermodel.find({username});
        console.log(user);
        if(user.length>0){
            throw new Error("username already exist in database");
        }

         const salt = await bcrypt.genSalt(10);
         password = await bcrypt.hash(password, salt);

         user = await usermodel.create({username,password});

         const token = commonservice.generateToken(user);

         return {
            username,
            _id:user._id,
            token
         }


    }

    async loginUser(userdata){
        const {username,password} = userdata;

        const user = await usermodel.findOne({username});
        if(!user){
            throw new Error("Invlaid Creds");
        }
        const match = await bcrypt.compare(password,user.password);
        
        if(!match){
            throw new Error("Invalid Creds");
        }

        const token = commonservice.generateToken(user);

        return {
            message : "login successfully",
            token : token
        }

    }
}

module.exports = new UserService();