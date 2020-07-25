const express = require("express");
const router = express.Router();
const { postRegister } = require("../controllers/index");

// const indexObj = require("../controllers/index"); //Controller
// const postRegister = indexObj.postRegister;

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop - Home" });
});

router.get("/register", (req, res, next) => {
  res.send("Get /register");
});

router.post("/register", postRegister);

router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

router.post("/login", (req, res, next) => {
  res.send("POST /login");
});

router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

router.put("/profile/:user_id", (req, res, next) => {
  res.send("Put user /profile/:user_id");
});

router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot-password");
});

router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgot-password");
});

router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset-password");
});

router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset-password");
});

module.exports = router;
