import express from "express"
import postControllers from "../controllers/userControllers.js"

const router = express.Router();

router.post("/api/user", postControllers);

export default router;