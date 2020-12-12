import { Router } from "express";

import TariffController from "../controllers/TariffController";

const tariffController = new TariffController()

const tariffsRouter = Router()

tariffsRouter.post('/', tariffController.index)

export default tariffsRouter