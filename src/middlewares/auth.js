const authAdmin = (req,res,next) => {
    console.log("admin authorization checking")
    const token="admin1";
    const adminAuthorization=token=="admin";
    if(!adminAuthorization){
    res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
}
const authUser = (req,res,next) => {
    console.log("user authorization checking")
    const token="user1";
    const adminAuthorization=token=="user";
    if(!adminAuthorization){
    res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
}

module.exports = {
    authAdmin,
    authUser,
}