import IPlanDTO from "../infra/dtos/IPlanDTO";

interface IPlanRepository {
  findById(id: string): Promise<IPlanDTO | undefined>
  findAll(): Promise<IPlanDTO[] | undefined>
}

export default IPlanRepository