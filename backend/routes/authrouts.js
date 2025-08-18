const express = require("express");
const { registerUser, loginUser } = require("../controller/authuntication");
// const {settingupprofile} = require("../controller/profilesetup");
const {roadmapgen} = require("../controller/roadmapgen");

const router = express.Router();


router.post("/signup", registerUser);
router.post("/login", loginUser);
// router.post("/profile", settingupprofile); 
router.post("/chatbot",roadmapgen);


module.exports = router;
