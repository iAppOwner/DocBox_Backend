const save = require("../controller/saveController")
const router = require("express").Router()

router.route("/login").post(save.login)

module.exports = router;