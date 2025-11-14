
const productservice = require('../services/product.service');

class ProductController
{
   
    async getProducts(req,resp){
        try{
            let response = await productservice.fetchProducts();
            return resp.json({ error : false , data : response });
        }catch(e){
            
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }

    async getProduct(req,resp){
        try{
            let response = await productservice.fetchProduct(req.params.id);
            return resp.json({ error : false, data : response });
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }

    async createProduct(req,resp){
        try{
            console.log("create product controller is running");
            
            let response = await productservice.addProduct(req.body);
            return resp.json({ error : false , data : response });
        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
        
    }

    async updateProduct(req,resp){
        try{
            let productid = req.params.id;
            let product = req.body;
            let response = await productservice.updateProduct(product,productid);
            return resp.json({ error : false , data : response });

        }catch(e){
            return resp.status(501).json({error:true,status:501,data:e})
        }
    }

    async deleteProduct(req,resp){
        try{
            let productid = req.params.id;
            let response = await productservice.deleteProduct(productid);
            return resp.json({ error : false , data : response });
        }catch(e){
             return resp.status(501).json({error:true,status:501,data:e})
        }
    }

}

module.exports = new ProductController();