import { container } from "tsyringe";

import ITariffRepository from "@modules/tariffs/repositories/ITariffRepository";
import TariffRepository from "@modules/tariffs/repositories/TariffRepository";

import IPlanRepository from "@modules/plans/repositories/IPlanRepository";
import PlanRepository from "@modules/plans/repositories/PlanRepository";

container.registerSingleton<ITariffRepository>(
  'TariffRepository',
  TariffRepository
)

container.registerSingleton<IPlanRepository>(
  'PlanRepository',
  PlanRepository
)