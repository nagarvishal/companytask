
const express = require('express');
const mongoose = require("mongoose");
const productRouter = require('./routers/product.routers');
const userRouter = require('./routers/user.routers');
const cors = require("cors");


const app = express();
const port = 4500

app.use(cors()); 

mongoose.connect("mongodb://127.0.0.1:27017/companytask")
.then(()=>{
    console.log("Mongodb Connected Successfully");
})
.catch((e)=>{
    console.log("Mongodb Not Connected ",e);
})

app.use(express.json());            // for parsing application/json
app.use(express.urlencoded({ extended: true }));


app.use("/product",productRouter);
app.use("/user",userRouter);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(port,()=>{

    console.log("server is listening on port 4500");

})