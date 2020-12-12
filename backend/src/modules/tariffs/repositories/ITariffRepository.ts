import ITariffDTO from "../infra/dtos/ITariffDTO";

interface ITariffData {
  origin: string,
  destination: string
}

interface ITariffRepository {
  findByOriginAndDestination({ origin, destination }: ITariffData): Promise<ITariffDTO | undefined>
}

export default ITariffRepository