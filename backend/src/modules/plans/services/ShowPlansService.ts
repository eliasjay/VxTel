import { inject, injectable } from "tsyringe";

import IPlanRepository from "../repositories/IPlanRepository"
import IPlanDTO from "../infra/dtos/IPlanDTO"

@injectable()
class ShowPlansService {
  constructor(
    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) { }

  public async execute(): Promise<IPlanDTO[] | undefined> {
    return await this.planRepository.findAll()
  }
}

export default ShowPlansService