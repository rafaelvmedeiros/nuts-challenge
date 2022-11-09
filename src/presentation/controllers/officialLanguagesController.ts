import { Request, Response } from "express";
import { Country } from "../../interfaces/country";
import { CountryService } from "../../services/country";

class OfficialLanguagesyController {
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

        const language = req.query.language ?  req.query.language.toString() : "de"

        const countryService = new CountryService()
        const result = countryService.findCountriesByOfficialSpeakLanguage(language, data)
        return res.status(200).json({ data: result })
    }
}


export default new OfficialLanguagesyController()