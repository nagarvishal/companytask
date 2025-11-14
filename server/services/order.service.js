const ordermodel = require("../models/order.model");
class OrderService
{
    async createOrder(orderdata){
        let response = await ordermodel.create(orderdata);
        return response;
    }

    async getAllUserOrder(userid){
        let response = await ordermodel.find({
            user_id:userid
        })

        return response;
    }

    async updateOrder(orderid,orderdata){
        let response = await ordermodel.findByIdAndUpdate(orderid,orderdata);
        return response;
    }
    async deleteOrder(orderid){
        let response = await ordermodel.findByIdAndDelete(orderid);
        return response;
    }
}

module.exports = new OrderService();