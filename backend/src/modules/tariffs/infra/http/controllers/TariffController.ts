import { Request, Response } from "express";
import { container } from "tsyringe";

import CalculateTariffService from "@modules/tariffs/services/CalculateTariffService";

class TariffController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { plan_id, origin, destination, durationInMinutes } = request.body

      const calculateTariffService = container.resolve(CalculateTariffService)
  
      const tariff = await calculateTariffService.execute({
        plan_id,
        origin,
        destination,
        durationInMinutes
      })
  
      return response.json(tariff)
    } catch (error) {
      return response.status(400).json({ 
        status: 'error',
        message: error.message
      });
    }
  }
}

export default TariffController