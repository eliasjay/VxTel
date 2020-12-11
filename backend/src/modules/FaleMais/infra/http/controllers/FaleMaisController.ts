import { Request, Response } from "express";
import FaleMaisService from "@modules/FaleMais/services/FaleMaisService";

class FaleMaisController {
  public async create(request: Request, response: Response): Promise<any> {
    
    return response.json({'message':0})
  }
}

export default FaleMaisController