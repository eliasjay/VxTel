import { Router } from "express";

import TariffController from "../controllers/TariffController";

const tariffController = new TariffController()

const tariffRouter = Router()

tariffRouter.post('/', tariffController.index)

export default tariffRouter