import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import ITariffRepository from "../repositories/ITariffRepository";
import IPlanRepository from "@modules/plans/repositories/IPlanRepository";

interface IRequest {
  plan_id: string,
  origin: string,
  destination: string,
  durationInMinutes: number
}

interface IResponse {
  withFaleMais: number,
  withoutFaleMais: number,
}

@injectable()
class CalculateTariffService {
  constructor(
    @inject('TariffRepository')
    private tariffRepository: ITariffRepository,

    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) { }

  public async execute(
    { plan_id, origin, destination, durationInMinutes }: IRequest)
      : Promise<IResponse | undefined> {
        const tariff = await this.tariffRepository.findByOriginAndDestination({
          origin,
          destination
        })

        if (!tariff) {
          throw new AppError('Verify origin and destination form call.')
        }

        const plan = await this.planRepository.findById(plan_id)

        if (!plan) {
          throw new AppError('Plan not found.')
        }
        
        let taxOverMinutes: number;
        const tariffTax: number = 1.1

        if (durationInMinutes > plan.availableMinutes) {
          taxOverMinutes = durationInMinutes - plan.availableMinutes
        }

        const withFaleMais = taxOverMinutes * (tariff.pricePerMinutes * tariffTax)
        const withoutFaleMais = durationInMinutes * tariff.pricePerMinutes

        return { withFaleMais, withoutFaleMais }
      }
}

export default CalculateTariffService