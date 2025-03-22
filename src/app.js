const express = require('express');
const app = express();

app.use("/home",(req,res)=>{
    res.send("Welcome to home")
})
app.listen(3000,()=>{
    console.log(`server running at port 3000`);
});