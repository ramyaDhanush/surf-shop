const express = require("express");
const router = express.Router({mergeParams:true});
// GET index         /reviews
router.get("/", (req, res, next) => {
  res.send("Index /posts/:id/reviews");
});

// GET review           /reviews/new
router.post("/", (req, res, next) => {
  res.send(" cerate /reviews/");
});

// GET edit   /reviews/:id
router.get("/:review_id/edit", (req, res, next) => {
  res.send("edit         /posts/:id/reviews/:id/edit");
});

// GET edit      /reviews/:id/edit
router.put("/:review_id", (req, res, next) => {
  res.send("Update  /posts/:id/reviews/:id/");
});

// DELETE destroy    /reviews\:if
router.delete("/:review_id", (req, res, next) => {
  res.send(" DELETE destroy   :review_id");
});

module.exports = router;

// GET index         /reviews
// GET new           /reviews/new
// POST create       /reviews
// GET show          /reviews/:id
// GET edit          /reviews/:id/edit
// PUT update        /reviews/:id
// DELETE destroy    /reviews\:if
