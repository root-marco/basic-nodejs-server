import express from "express";

import * as userController from "../controllers/userController.js";
import checkNotAuthenticated from "../middlewares/checkNotAuthenticated.js";

const router = express.Router();

router.get("/login", checkNotAuthenticated, userController.getLogin);
router.get("/register", checkNotAuthenticated, userController.getRegister);

router.post("/login", checkNotAuthenticated, userController.postLogin);
router.post("/register", checkNotAuthenticated, userController.postRegister);

router.delete("/logout", userController.deleteLogout);

export default router;