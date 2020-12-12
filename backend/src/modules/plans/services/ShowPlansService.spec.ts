import PlanRepository from "@modules/plans/repositories/PlanRepository";
import ShowPlansService from "./ShowPlansService"

let planRepository: PlanRepository
let showPlansService: ShowPlansService

describe('ShowPlansService', () => {
  beforeEach(() => {
    planRepository = new PlanRepository()
    showPlansService = new ShowPlansService(planRepository)
  })

  it('Should be able to list all plans', async() => {
    const plans = await showPlansService.execute()
    expect(plans[2].name).toBe('Fale Mais 120')
  })
})