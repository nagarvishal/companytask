
const express = require('express');
const ProductController = require('../controllers/product.controller');
const usermiddleware = require('../middlewares/user.middleware');

const router = express.Router();

// router.use((req,resp,next)=>{

//     console.log("hello world");

// })


router.use(usermiddleware.authentication);

router.get("/",ProductController.getProducts);
router.get("/:id",ProductController.getProduct);
router.post("/",ProductController.createProduct);
router.put("/:id",ProductController.updateProduct);
router.delete("/:id",ProductController.deleteProduct);

router.get("/check",(req,resp)=>{

    resp.send("successfully updated");

})

module.exports = router;