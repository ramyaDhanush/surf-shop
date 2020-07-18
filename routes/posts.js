const express = require("express");
const router = express.Router();
// GET index         /posts
router.get("/", (req, res, next) => {
  res.send("/posts");
});

// GET new           /posts/new
router.get("/new", (req, res, next) => {
  res.send("/posts/new");
});

// POST create       /posts
router.post("/", (req, res, next) => {
  res.send(" create /posts/new");
});

// GET show          /posts/:id
router.get("/:id", (req, res, next) => {
  res.send("show          /posts/:id");
});

// GET edit          /posts/:id/edit
router.get("/:id/edit", (req, res, next) => {
  res.send("/posts/:id/edit rgrtbh");
});

// PUT update        /posts/:id
router.put("/:id", (req, res, next) => {
  res.send("update        /posts/:id");
});

// DELETE destroy    /posts\:if
router.delete("/:id", (req, res, next) => {
  res.send(" DELETE destroy    /posts:if");
});

module.exports = router;

// GET index         /posts
// GET new           /posts/new
// POST create       /posts
// GET show          /posts/:id
// GET edit          /posts/:id/edit
// PUT update        /posts/:id
// DELETE destroy    /posts\:if
