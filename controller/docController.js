const aw = require("../util/asyncErrorHandler")
const {createFolder, del} = require('../services/awsService')
const {saveBox,deleteBox, getBox} = require('../services/boxService')
const file = require("../services/fileService");

exports.create = aw(async(req,res)=>{
    let body = req.body;
    let docName = req.body.docName;
    let serviceResponse = {};
    let name = await getBox(docName)
    console.log("name",name.length)
    if(docName)
    {
        if(!name.length)
        {
            createFolder(`${docName}/`)
            saveBox(body)
            serviceResponse = {
                status : 200,
                message : "DOC BOX CREATED SUCCESSFULLY",
            } 
        }
        else
        {
            serviceResponse = {
                status : 400,
                message : "DocBox Already Presist, Tyr with DIffrent Name.",
            } 
        }

    }
    else
    {
        serviceResponse = {
            status : 400,
            message : "Invalid Payload",
        } 
    }

 res.send(serviceResponse)
})

exports.delete = aw(async(req,res)=>{
    let docName = req.params.docName;
    let serviceResponse = {};

    if(docName)
    {
        file.deleteAllFile(docName)
        deleteBox(docName)
        del(`${docName}/`)
        serviceResponse = {
            status : 200,
            message : "DOC BOX DELETED SUCCESSFULLY",
        } 
    }
    else
    {
        serviceResponse = {
            status : 400,
            message : "Invalid Payload",
        } 
    }

 res.send(serviceResponse)
})
