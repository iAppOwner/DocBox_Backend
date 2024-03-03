const loginDataToDB = require("../services/loginService");
const aw = require("../util/asyncErrorHandler")

exports.login = aw(async(req,res)=>{
    let body = req.body.loginDetails;
    let serviceResponse = {};
    console.log(body)
    let savedData = await loginDataToDB.login(body.username);
  console.log(savedData.length)
    if(savedData.length)
    {
        serviceResponse = {
            status : 200,
            message : "Ok",
            role : savedData[0].role,
            username : savedData[0].username 
        } 
    }
    else
    {
        serviceResponse = {
            status : 400,
            message : "Wrong Username or Password",
        } 
    }
 res.send(serviceResponse)
})

