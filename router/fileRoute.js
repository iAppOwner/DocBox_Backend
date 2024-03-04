const file = require("../controller/fileController")
const router = require("express").Router()
const multer = require('multer')
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const {BUCKET,awsConfig} = require('../util/aws');
require('dotenv').config() 
awsConfig()
const s3 = new aws.S3({ region: process.env.REGION });

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: BUCKET,
        key: function (req, file, cb) {
            cb(null, `${req.params.docName}/${file.originalname}`); 
          }
    })
});

router.route("/get/:docName").get(file.getFile)

router.route("/save/:docName").put(upload.single('file'),file.saveFile)

router.route("/download").get(file.download)

router.route("/delete").delete(file.deleteFile)

module.exports = router;