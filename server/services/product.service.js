
const productmodel = require('../models/product.model');

class ProductService
{
    async addProduct(product){
        let response = await productmodel.create(product);
        return response;

    }

    async fetchProducts(){
        let response = await productmodel.find();
        return response;
    }

    async fetchProduct(productid){
        let response = await productmodel.findById(productid);
        return response;
    }

    async updateProduct(product,productid){
        let response = await productmodel.findByIdAndUpdate(productid,product,{new:true});
        return response;
    }
    
    async deleteProduct(productid){
        let response = await productmodel.findByIdAndDelete(productid);
        return response;
    }
}

module.exports = new ProductService();