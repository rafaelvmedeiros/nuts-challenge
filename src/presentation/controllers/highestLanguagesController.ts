import { Request, Response } from "express";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country";

class HighestLanguagesController {
    async index(req: Request, res: Response) {
        const data: Country[] = [
            {
            "country":"US",
            "languages": ["en"]
            },
            {
            "country":"BE",
            "languages": ["nl","fr","de"]
            },
            {
            "country":"NL",
            "languages": ["nl"]
            },
            {
            "country":"DE",
            "languages": ["de"]
            },
            {
            "country":"ES",
            "languages": ["es"]
            }
        ]   

        const countryService = new CountryService()
        const result = countryService.countCountryThatHaveMoreHighestOfficialLanguages(data)
        return res.status(200).json({ data: result })
    }
}


export default new HighestLanguagesController()