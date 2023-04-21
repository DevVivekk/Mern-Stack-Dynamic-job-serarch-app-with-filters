const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const jobModel = require('./db')
app.use(cors());
app.listen(4000);



app.get('/find',async(req,res)=>{
    try{
    const {job,location,experience} = req.query;
    console.log(req.query.experience)
    const queryy = {};
    if(job){
        queryy.JobTitle = {$regex:job,$options:"i"}
    }
    if(location){
        queryy.location = location
    }
    if(experience){
        queryy.experienceLevel = experience
    }
    const find = await jobModel.find(queryy)
    res.status(201).json(find)
}catch(e){
    console.log(e)
    res.status(401).json(e)
}
})

//production
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"build")));
   app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
   })
}
