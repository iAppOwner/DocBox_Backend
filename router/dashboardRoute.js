const dash = require("../controller/dashboardController")
const router = require("express").Router()

router.route("/").get(dash.board)

module.exports = router;