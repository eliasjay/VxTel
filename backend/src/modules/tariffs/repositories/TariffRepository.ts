import TariffTable from "@database/TariffTable.json";

import ITariffRepository from "./ITariffRepository";
import ITariffDTO from "../infra/dtos/ITariffDTO";

interface ITariffData {
  origin: string,
  destination: string
}

class TariffRepository implements ITariffRepository {
  async findByOriginAndDestination({ origin, destination }: ITariffData): 
    Promise<ITariffDTO | undefined> {
      const filtredTariff = await TariffTable.find(
        tariff => tariff.origin === origin && tariff.destination === destination
      ) 
      
      return filtredTariff
    }
}

export default TariffRepository