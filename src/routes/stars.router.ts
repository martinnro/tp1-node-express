import { Router } from "express";
import { getStarsController } from "../controller/getStars.controller";
import { getStarsByID } from "../controller/getStarsByID.controller";
import { createStarController } from "../controller/createStar.controller";
import { validateStarBody } from "../middleware/validationMiddleware";



export const router = Router();

router.get('/', getStarsController)
router.get('/:id', getStarsByID)
router.post('/', validateStarBody ,createStarController)