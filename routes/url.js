const express = require("express");
const {
  handlegenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectURL,
} = require("../controllers/url");


const router = express.Router();

router.post("/", handlegenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/:shortId", handleRedirectURL)

module.exports = router;
