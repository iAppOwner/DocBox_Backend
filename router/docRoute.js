const doc = require("../controller/docController")
const router = require("express").Router()

router.route("/create").post(doc.create)

router.route("/delete/:docName").delete(doc.delete)

module.exports = router;