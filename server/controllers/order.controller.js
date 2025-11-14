
const orderservice = require("../services/order.service");
class OrderController
{
    async createOrder(req,resp){
        try{
            const userid = req.profile._id;
            req.body.user_id = userid;
            let response = await orderservice.createOrder(req.body);
            return resp.json({error:false,data:response});


        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
    async updateOrder(req,resp){
        try{
            const orderid = req.params.id;
            let response = await orderservice.updateOrder(orderid,req.body.data);
            return resp.json({error:false,data:response});
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
    async deleteOrder(req,resp){
        try{
            const orderid = req.params.id;
            let response =await orderservice.deleteOrder(orderid);
            return resp.json({error:false,data:response});
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
    async getAllOrder(req,resp){
        try{
            const userid = req.profile._id;
            const allorders = await orderservice.getAllUserOrder(userid);
            return resp.json({error:false,data:allorders});
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }
}

module.exports = new OrderController();