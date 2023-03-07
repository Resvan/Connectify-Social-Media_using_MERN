import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createConverstation, getConverstation } from "../controllers/converstationController.js";
const router = express.Router();

/* New */
router.post('/', createConverstation)

/* Get user converstation */
router.get('/:converstationId', getConverstation)


export default router;