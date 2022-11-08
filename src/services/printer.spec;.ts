import { PrinterService } from "./printer"

describe('Printer Service', () => {
    it("should print visual when number is divisible by 3", () => {
        const numbers = [12, 18, 21, 24, 27];

        const sut = new PrinterService()
        const printerResponse = sut.printer(numbers)
        printerResponse.map(printer => expect(printer).toBe("Visual"))
    })

    it("shoud print nuts when number is divisible by 5", () => {
        const numbers = [5, 10];

        const sut = new PrinterService()
        const printerResponse = sut.printer(numbers)
        printerResponse.map(printer => expect(printer).toBe("Nuts"))
    })

    it("should print visual nuts when number is divisible by 3 and 5", () => {
        const numbers = [15];

        const sut = new PrinterService()
        const printerResponse = sut.printer(numbers)
        printerResponse.map(printer => expect(printer).toBe("Visual Nuts"))
    })
  
    it("should print number when it doesn't divisible by 3 or 5", () => {
        const numbers = [1, 2, 7, 13, 23, 37];
  
        const sut = new PrinterService()
        const printerResponse = sut.printer(numbers)

        printerResponse.map(printer => {
            expect(Number.isInteger(printer)).toBeTruthy()
        })
    })

    it("should print numbers from 1 to 100", () => {
        const numbers = Array.from(Array(100).keys())
  
        const sut = new PrinterService()
        const printerResponse = sut.printer(numbers)
        expect(printerResponse).toHaveLength(100)
    })
}) 