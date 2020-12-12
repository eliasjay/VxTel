import PlanTable from "@database/PlanTable.json"

import IPlanRepository from "./IPlanRepository";
import IPlanDTO from "../infra/dtos/IPlanDTO";

class PlanRepository implements IPlanRepository {
  async findById(id: string): Promise<IPlanDTO | undefined> {
    return PlanTable.find(plan => plan.id === id)
  }

  async findAll(): Promise<IPlanDTO[] | undefined> {
    return PlanTable
  }
}

export default PlanRepository