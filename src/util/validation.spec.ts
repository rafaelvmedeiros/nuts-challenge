import { arrayContainsData  } from "./validation";


describe("Validation", () => {
    it("should return true when array contains data", () => {
        const data = [1, 2];
        const sut = arrayContainsData(data);
        expect(sut).toBeTruthy()
    })

    it("should return false when array not contains data", () => {
        const data = [];
        const sut = arrayContainsData(data);
        expect(sut).toBeFalsy()
    })
})