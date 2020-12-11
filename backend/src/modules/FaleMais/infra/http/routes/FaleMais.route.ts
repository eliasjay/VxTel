import { Router } from "express";

import FaleMaisController from "@modules/FaleMais/infra/http/controllers/FaleMaisController";

const faleMaisRouter = Router()

const faleMaisController = new FaleMaisController()

faleMaisRouter.get('/', faleMaisController.create)

export default faleMaisRouter