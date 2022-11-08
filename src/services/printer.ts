import { numberIsDivisibleByFive, numberIsDivisibleByThree } from "../util/dividers"

export class PrinterService {
    printer(range: number): Array<number | string> {

        return [...Array.from(Array(range).keys())].map(item => {
            
            if(numberIsDivisibleByThree(item) && numberIsDivisibleByFive(item)) {
                return "Visual Nuts"
            }

            if(numberIsDivisibleByThree(item)) {
                return "Visual"
            }

            if(numberIsDivisibleByFive(item)) {
                return "Nuts"
            } 

            return item
        })
    }
}
