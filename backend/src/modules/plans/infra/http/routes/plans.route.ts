import { Router } from "express";

import PlansController from "../controllers/PlansController";

const plansController = new PlansController()

const plansRouter = Router()

plansRouter.get('/', plansController.show)

export default plansRouter