const router = require("express").Router();
const usercontroller = require("../../contollers/usercontroller.js");

router.route("/")
  .post(usercontroller.create)
  .get(userController.findById);


router.route("/:email")
   .post(usercontroller.create)
  .get(usercontroller.findByEmail);
  router.route("/signin")
  .post(usercontroller.create)
  .get(usercontroller.findAll);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router