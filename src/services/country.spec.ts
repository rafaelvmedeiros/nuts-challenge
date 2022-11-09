import { Country } from "../interfaces/country";
import { CountryService } from "./country";

describe("Countries Service", () => {
    let data: Country[] = [
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
    
    it("should return the number of countries in the world", () => {
        const sut = new CountryService()
        const response = sut.numberOfCountriesInTheWorld(data)
        expect(response).toBe(5)
    })

        
    it("should return the country with the most official languages, where they officially speak German and counts all the oficial languages spoken", () => {
        const sut = new CountryService()
        const response = sut.findCountriesByOfficialSpeakLanguage("de", data)

        expect(response).toEqual(expect.objectContaining({
            "country": "BE",
            "languages": ["nl", "fr", "de"],
            "totalLanguages": 3,
        }))
    })

    it("should return the country with the highest number of official languages", () => {
        const sut = new CountryService()
        const response = sut.countCountryThatHaveMoreHighestOfficialLanguages(data)

        expect(response).toEqual(expect.objectContaining({
            "country": "BE",
            "languages": ["nl", "fr", "de"],
            "totalLanguages": 3,
        }))
    })

    it("should return the most common official language(s) of all countries", () => {
        const sut = new CountryService()
        const response = sut.findMostCommonOfficialLanguage(data)

        expect(response).toEqual([
        {"language": "nl", "totalLanguages": 2}, 
        {"language": "de", "totalLanguages": 2},
        {"language": "en", "totalLanguages": 1},
        {"language": "fr", "totalLanguages": 1},
        {"language": "es", "totalLanguages": 1}
        ])
    })
})