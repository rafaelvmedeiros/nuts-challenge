import { PrinterService } from "./printer"

describe('Printer Service', () => {
    it("should print Visual Nuts", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(1)
        expect(data).toContain("Visual Nuts")
    })

    it("should print Visual", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(5)
        expect(data).toContain("Visual")
    })

    it("should print Nuts", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(10)
        expect(data).toContain("Nuts")
    })

    it("should print Number", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(5)
        expect(data).toEqual(expect.arrayContaining([expect.any(Number)]))
    })

    it("should accept ranges input - 100", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(100)
        expect(data).toHaveLength(100)
    })

    it("should accept ranges input - 200", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(200)
        expect(data).toHaveLength(200)
    })
    
    it("should accept ranges input - 300", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(300)
        expect(data).toHaveLength(300)
    })
        
    it("should accept ranges input - 400", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(400)
        expect(data).toHaveLength(400)
    })

    it("should accept ranges input - 500", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(500)
        expect(data).toHaveLength(500)
    })

    it("should accept ranges input - 1000", () => {
        const sut = new PrinterService()
        
        const data = sut.printer(1000)
        expect(data).toHaveLength(1000)
    })
}) 