const aws = require('aws-sdk')
require('dotenv').config() 

exports.BUCKET = process.env.BUCKET

exports.awsConfig = ()=>{aws.config.update({
    secretAccessKey: process.env.ACCESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: process.env.REGION, 

});}