const express = require("express");
const { getAllUser, creatUser, updateProfile, getUserdetails } = require("../controllers/user");

const router = express.Router();

router.route("/newuser").post(creatUser)
router.route("/getalluser").get(getAllUser)
router.route("/user/:id").get(getUserdetails)
router.route("/updateuser/:id").put(updateProfile)

module.exports = router
