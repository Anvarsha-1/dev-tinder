const express = require('express');
const {ConnectDB}=require("./config/DataBS.js");
const User = require("./model/user.js")
const app = express();
app.use(express.json())



app.post('/signup',async (req,res)=>{
    const user = new User(req.body);
    try{   
        await user.save();
        res.send("Data Received Successfully");
    }
    catch(err){
        res.status(400).send("Error Saving Data"+err.message);
        console.log(err.message);
    } 
})

    ConnectDB()
   .then(()=>{
    console.log("DataBase Connection Established");
    app.listen(3000,()=>{
    console.log(`server running at port 3000`);
});
})

    .catch((error)=>{
    console.log("DataBase cannot be Connected"+error.message);
})


