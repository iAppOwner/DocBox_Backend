const boxDB = require("../services/boxService");
const loginDataDB = require("../services/loginService")
const aw = require("../util/asyncErrorHandler")

exports.board = aw(async(req,res)=>{
let final = {};

let boxData = await boxDB.getAllBox();
let userData =  await loginDataDB.getUsers();

const dataSource = boxData;

  
let counts = { 
     totalDocs : boxData.length,
  totalFile : 0,
  totalUsers : userData.length
}

final = {
   ...counts,dataSource
}

 res.send(final)
})

