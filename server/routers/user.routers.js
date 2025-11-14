
const express = require('express');

const userController = require('../controllers/user.controller');
const usermiddleware = require('../middlewares/user.middleware');


const router = express.Router();

router.get("/",usermiddleware.authentication,userController.getUser);
router.post("/",userController.creatUser);
router.post("/login",userController.loginuser);
router.delete("/delete",usermiddleware.authentication,userController.deleteUser);
router.put("/update",usermiddleware.authentication,userController.updateUser);

module.exports = router;