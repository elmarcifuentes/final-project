const express = require ("express");
const router = express.Router();
const authRoutes = require("./auth/auth.routes")

router.use("/auth", authRoutes);
//router.post("/login");

module.exports = router;