import { Router } from "express";

import faleMaisRouter from "@modules/FaleMais/infra/http/routes/FaleMais.route";

const routes = Router()

routes.use('/fale-mais', faleMaisRouter)

export default routes