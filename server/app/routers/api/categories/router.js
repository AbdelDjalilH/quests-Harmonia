const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

router.get("/:id", read );



router.get("/", browse);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

/* ************************************************************************* */

module.exports = router;