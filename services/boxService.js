const boxDataDB = require("../modal/boxModal")

exports.saveBox = async(saveBody)=>{
    try
{
    let savedBody = await boxDataDB.insertMany(saveBody)
    return savedBody;
    }
    catch(e)
    {
        return null;
    }
}

exports.deleteBox = async(docName)=>{
    try
{
    let savedUser = await boxDataDB.findOneAndDelete({docName});
    return savedUser;
    }
    catch(e)
    {
        return null;
    }
}

exports.getAllBox = async()=>{
    try
    {
        let allBox = await boxDataDB.find();
        return allBox;
        }
        catch(e)
        {
            return null;
        }
}

exports.getBox = async(docName)=>{
    try
    {
        let Box = await boxDataDB.find({docName});
        console.log(Box)
        return Box;
        }
        catch(e)
        {
            return null;
        }
}
