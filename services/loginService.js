const loginDataDB = require("../modal/loginModal")

exports.saveFields = async(saveBody)=>{
    try
{
    let savedBody = await loginDataDB.insertMany(saveBody)
    return savedBody;
    }
    catch(e)
    {
        return null;
    }
}

exports.login = async(username)=>{
    try
{
    let savedUser = await loginDataDB.find({username});
    return savedUser;
    }
    catch(e)
    {
        return null;
    }
}

exports.getUsers = async()=>{
    try
{
    let savedUser = await loginDataDB.find();
    return savedUser;
    }
    catch(e)
    {
        return null;
    }
}