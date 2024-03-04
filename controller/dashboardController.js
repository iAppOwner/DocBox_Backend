const boxDB = require("../services/boxService");
const loginDataDB = require("../services/loginService")
const aw = require("../util/asyncErrorHandler")

exports.board = aw(async(req,res)=>{
let final = {};

let boxData = await boxDB.getAllBox();
let userData =  await loginDataDB.getUsers();

const dataSource = boxData;

  //FOR FILES
  const fileSource = [
    {
      key: '1',
      name: 'Mariraja',
      aurthor: 'user',
      date: '21/02/2000',
    },
    {
      key: '2',
      name: 'Vijaya',
      aurthor: 'admin',
      date: '25/02/2000',
    },
    {
      key: '3',
      name: 'Selvam',
      aurthor: 'user',
      date: '29/02/2000',
    },
    {
      key: '4',
      name: 'Jothika',
      aurthor: 'user',
      date: '01/03/2000',
    },
  ];

let counts = { 
     totalDocs : boxData.length,
  totalFile : 0,
  totalUsers : userData.length
}

final = {
   ...counts,dataSource,fileSource
}

 res.send(final)
})

