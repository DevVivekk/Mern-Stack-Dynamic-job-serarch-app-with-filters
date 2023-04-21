const mongoose = require("mongoose");
const dotenv = require('dotenv')
require("dotenv").config();
const jobModel  = require('./db')
const productjson = require('./data.json');
const start = async()=>{
    try{     
        await mongoose.connect(process.env.MONGO)
        .then((res)=>{
            console.log("connected!")
        }).catch((e)=>{
            console.log(e);
        })
        //await API_PRODUCT.deleteMany();
        await jobModel.create(productjson);
        console.log("success");
    }catch(e){
        console.log(e);
    }
}
start();