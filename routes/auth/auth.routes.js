const express = require ("express");
const router = express.Router();
const ctrl = require("../../app_api/controllers/auth/auth.ctrl")

router.post("/register", ctrl.register);
router.post("/login");

module.exports = router;