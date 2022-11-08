import { Request, Response } from "express";
import { PrinterService } from "../../services/printer";

class PrinterController {
    async index(req: Request, res: Response) {
        const printService = new PrinterService()
     
        const range = req.query.hasOwnProperty("range") ? Number(req.query.range) : 100
        const result = printService.printer(range)
       
        return res.status(200).json({ data: result })
    }
}


export default new PrinterController()