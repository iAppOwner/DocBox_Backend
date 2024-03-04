const {get,del,download} = require("../services/awsService");
const aw = require("../util/asyncErrorHandler")
const file = require("../services/fileService")

exports.getFile = aw(async(req,res)=>{
    let docName = req.params.docName;
    let files = await file.getFile(docName)
    let serviceResponse = {};
    serviceResponse.value = files;
 res.send(serviceResponse)
})

exports.saveFile = aw(async(req,res)=>{
  let body = req.body;
  await file.saveFile(body)
  let serviceResponse = {};
  serviceResponse.status = 200;
res.send(serviceResponse)
})

exports.download = aw(async(req,res)=>{
  let fileName = req.query.fileName;
  let docName = req.query.docName;
  let url = await download(`${docName}/${fileName}`)
  let serviceResponse = {};
  serviceResponse.status = 200;
 serviceResponse.link = url;
res.send(serviceResponse)
})


exports.deleteFile = aw(async(req,res)=>{
  let fileName = req.query.fileName;
  let docName = req.query.docName;
  await del(`${docName}/${fileName}`)
  await file.deleteFile(fileName)
  let serviceResponse = {};
  serviceResponse.status = 200;

res.send(serviceResponse)
})

