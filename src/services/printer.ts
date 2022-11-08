export class PrinterService {
    printer(data: Array<number>): Array<any> {

        return data.map(item => {
            
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

function numberIsDivisibleByThree(data: number):boolean {
    return data % 3 === 0
}

function numberIsDivisibleByFive(data: number):boolean {
    return data % 5 === 0
}