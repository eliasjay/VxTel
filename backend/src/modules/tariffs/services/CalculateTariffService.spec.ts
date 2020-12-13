import TariffRepository from "../repositories/TariffRepository";
import PlanRepository from "@modules/plans/repositories/PlanRepository";

import CalculateTariffService from "./CalculateTariffService";

import AppError from "@shared/errors/AppError";

let tariffRepository: TariffRepository
let planRepository: PlanRepository

let calculateTariffService: CalculateTariffService

describe('CalculateTariffService', () => {
  beforeEach(() => {
    tariffRepository = new TariffRepository()
    planRepository = new PlanRepository()

    calculateTariffService = new CalculateTariffService(
      tariffRepository, 
      planRepository
    )
  })

  it('Should be able to get tariff costs', async() => {
    const totalTariffCost = await calculateTariffService.execute({
      plan_id: "0b1a1035-b713-408c-8b08-4fc27877c7c1", // Plan Fale Mais 120
      origin: '018',
      destination: '011',
      durationInMinutes: 200
    })

    expect(totalTariffCost.withFaleMais).toBe(167.2)
    expect(totalTariffCost.withoutFaleMais).toBe(380)
  })

  it('Should not be able to get tariff cost with invalid origin/destination', async() => {
    await expect(
      calculateTariffService.execute({
        plan_id: "0b1a1035-b713-408c-8b08-4fc27877c7c1", // Plan Fale Mais 120
        origin: '011',
        destination: '011',
        durationInMinutes: 5
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('Should be not able to get tariff cost with invalid plan_id', async() => {
    await expect(
      calculateTariffService.execute({
        plan_id: "",
        origin: '018',
        destination: '011',
        durationInMinutes: 200
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})