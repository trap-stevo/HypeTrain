const router = require("express").Router();
const userController = require("../../contollers/usercontroller.js");

router.route("/")
.post(userController.createHypeUsers)
.get(userController.getHypeUser);

router.route("/:username")
.get(userController.getHypeUserWithHypeUserName)
.post(userController.createHypeUserIdentification);

router.route("/signin")
.get(userController.getHypeUser)
.post(userController.createHypeUsers);

// Matches with "/api/user/:id"
// router.route("/:id")
// .get(userController.findById)
// .put(userController.update)
// .delete(userController.remove);

module.exports = router

