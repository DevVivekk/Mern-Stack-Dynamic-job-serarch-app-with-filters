const mongoose = require("mongoose");
const dotenv = require('dotenv')
require('dotenv').config()
mongoose.connect(process.env.MONGO)
.then((res)=>{
    console.log("connected!")
}).catch((e)=>{
    console.log(e);
})

const mongooseSchema = new mongoose.Schema({
    JobTitle:{
        type:String
    },
    location:{
        type:String
    },
    salaryRange:{
        type:String
    },
    experienceLevel:{
        type:String
    }
})

const jobModel = new mongoose.model('Jobs',mongooseSchema)
module.exports = jobModel;