const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/api", apiRoutes)
router.use(function(req,res){
    res.sendFile(path.join(__dirname, "../public/App.js"))
})

module.exports = router