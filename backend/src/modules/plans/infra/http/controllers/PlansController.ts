import { Request, Response } from "express";
import { container } from "tsyringe";

import ShowPlansService from "@modules/plans/services/ShowPlansService";

class PlansController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showPlansService = container.resolve(ShowPlansService)
    const plans = await showPlansService.execute()

    return response.json(plans)
  }
}

export default PlansController