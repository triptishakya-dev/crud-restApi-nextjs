import express from "express"
import postControllers from "../controllers/userControllers.js"
import getuser from "../controllers/userControllers.js"

const router = express.Router();

router.post("/api/user", postControllers);
router.get("/api/user" , getuser);

export default router;