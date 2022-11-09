import { Country } from "../interfaces/country";
import { arrayContainsData } from "../util/validation";

export class CountryService {
    numberOfCountriesInTheWorld(data: Array<any>): Number {
        return data.reduce((_, current, index) => {
            if(current.country) return index + 1
        }, 0)
    }

    findCountriesByOfficialSpeakLanguage(language: string, data: Array<Country>): Country {
        const officialLanguageCounted = this.countOfficialLanguagesByCountry(data);
        const filteredCountriesByOfficialLanguage = this.filterCountriesByOfficialLanguage(language, officialLanguageCounted)
        const filteredCountryThatHaveMoreLanguage = this.filterCountryThatHaveMoreLanguages(filteredCountriesByOfficialLanguage)
        return filteredCountryThatHaveMoreLanguage
    }

    countCountryThatHaveMoreHighestOfficialLanguages(data: Array<Country>): Country {
        const officialLanguageCounted = this.countOfficialLanguagesByCountry(data);
        const filteredCountryThatHaveMoreLanguage = this.filterCountryThatHaveMoreLanguages(officialLanguageCounted)
        return filteredCountryThatHaveMoreLanguage
    }

    findMostCommonOfficialLanguage(data: Array<Country>): any {
        const languages = this.createListOfLanguages(data);
        const totalLanguagesByCountry = this.countLanguages(languages)
        return totalLanguagesByCountry;
    }
    
    private countOfficialLanguagesByCountry(data: Array<Country>) {
        return data.reduce((newCountry: Array<Country>, currentValue: Country): Array<Country> => {
    
                const totalLanguages = currentValue.languages.length;

                return newCountry.concat({
                    ...currentValue,
                    totalLanguages
                })
        }, [])
    }

    private filterCountriesByOfficialLanguage(language: string, data: Array<Country>) {
        return data.reduce((newCountry: Array<Country>, currentValue: Country): Array<Country> => {

            if(!currentValue.languages.includes(language)) {
                return newCountry
            }

            return newCountry.concat(currentValue)
        },[])
    }

    private filterCountryThatHaveMoreLanguages(data: Array<Country>) {
        return data.reduce((newCountry: Country, currentValue: Country): Country => {

            if(newCountry.totalLanguages > currentValue.totalLanguages) {
                return newCountry;
            } 

            return {
                ...newCountry,
                ...currentValue,
                totalLanguages: currentValue.totalLanguages
            }
        },
        {
            "country": "",
            "languages": [],
            "totalLanguages": 0
        })
    }

    private createListOfLanguages(data: Array<Country>): Array<string> {
        return data.reduce((newItem, currentItem: Country) => {
            return newItem.concat(currentItem.languages)
        }, [])
    }

    private countLanguages(data: Array<string>): any {
        return data.reduce((newItem, currentItem, _, array) => {

            const countedLanguages = array.filter(item => item === currentItem).length

            if(!arrayContainsData(newItem)) {
                return newItem.concat({
                    "language": currentItem,
                    "totalLanguages": countedLanguages
                })
            }

            if(newItem.some(item => item.language === currentItem)) {
                return newItem
            } else {
                return newItem.concat({
                    "language": currentItem,
                    "totalLanguages": countedLanguages
                })
            }
        }, []).sort((a,b) => {
            return b.totalLanguages - a.totalLanguages
        });
    }
}
