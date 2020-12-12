import { Router } from "express";

import tariffsRouter from "@modules/tariffs/infra/http/routes/tariff.routes";
import plansRouter from "@modules/plans/infra/http/routes/plans.routes";

const routes = Router()

routes.use('/tariffs', tariffsRouter)
routes.use('/plans', plansRouter)

export default routes