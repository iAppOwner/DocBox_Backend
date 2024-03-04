const fileDataDB = require("../modal/fileModal")

exports.saveFile = async(saveBody)=>{
    try
{
    let savedBody = await fileDataDB.insertMany(saveBody)
    return savedBody;
    }
    catch(e)
    {
        return null;
    }
}

exports.deleteAllFile = async(docName)=>{
    try
{
    let savedUser = await fileDataDB.deleteMany({docName});
    return savedUser;
    }
    catch(e)
    {
        return null;
    }
}

exports.deleteFile = async(filename)=>{
    try
{
    let savedUser = await fileDataDB.find({filename});
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
        let allBox = await fileDataDB.find();
        return allBox;
        }
        catch(e)
        {
            return null;
        }
}

exports.getFile = async(docName)=>{
    try
    {
        let Box = await fileDataDB.find({docName});
        console.log(Box)
        return Box;
        }
        catch(e)
        {
            return null;
        }
}
