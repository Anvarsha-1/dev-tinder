const mongoose = require('mongoose');

const ConnectDB = async () =>{
     await mongoose.connect("mongodb+srv://anvarshaanvar576:V4IKIcGJ9K6BghPo@myapp.lsyjy.mongodb.net/DevTinder");
};


module.exports={
    ConnectDB,
}



