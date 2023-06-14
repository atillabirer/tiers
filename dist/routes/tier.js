"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", () => {
    //all tiers
});
router.get("/:tierId", () => {
    //get a tier by ID
});
router.get("/user/:userId", () => {
});
router.post("/", () => {
    //attach tier to 
});
exports.default = router;
