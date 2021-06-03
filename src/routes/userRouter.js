import express from "express";

import * as userController from
"../controllers/userController.js";

const router = express.Router();

router.get("/login", userController.getLogin);
router.get("/register", userController.getRegister);
router.post("/login", userController.postLogin);
router.post("/register", userController.postRegister);

export default router;
