module.exports = (func)=>{
    return (req,res,next)=>{
      func(req,res,next).catch(err => {
          res.status("500")
          .json({
              "msg" : "INTERNAL SERVER ERROR",
              "Error" : err
          })
        })
    }
  }