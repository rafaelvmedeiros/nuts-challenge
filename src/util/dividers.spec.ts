import { numberIsDivisibleByFive, numberIsDivisibleByThree } from "./dividers";


describe("Dividers", () => {
    it("should return true when number is divisible by 5", () => {
        const sut = numberIsDivisibleByFive(5);
        expect(sut).toBeTruthy()
    })

    it("should return false when number isn't divisible by 5", () => {
        const sut = numberIsDivisibleByFive(3);
        expect(sut).toBeFalsy()
    })

    it("should return true when number is divisible by 3", () => {
        const sut = numberIsDivisibleByThree(3);
        expect(sut).toBeTruthy()
    })

    it("should return false when number isn't divisible by 3", () => {
        const sut = numberIsDivisibleByThree(5);
        expect(sut).toBeFalsy()
    })
})