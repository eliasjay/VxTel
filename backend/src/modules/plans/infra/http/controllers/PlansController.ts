import { Request, Response } from "express";
import { container } from "tsyringe";

import ShowPlansService from "@modules/plans/services/ShowPlansService";

class PlansController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const showPlansService = container.resolve(ShowPlansService)
      const plans = await showPlansService.execute()
  
      return response.json(plans)
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }
}

export default PlansController