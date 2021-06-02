import express from "express";

import * as userController from
"../controllers/userController.js";

const router = express.Router();

router.get("/login", userController.getLogin);
router.get("/register", userController.getRegister);

export default router;
