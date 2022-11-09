import { Request, Response } from "express";
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
  
import HighestLanguagesController from "./highestLanguagesController"

describe("HighestLanguages Controller", () => {
    let sut = HighestLanguagesController;
    let request: MockRequest<Request>;
    let response: MockResponse<Response>;

    beforeEach(() => {
        response = createResponse();
    })

    it("should be defined", () => {
        expect(sut).toBeDefined()
    })

    describe("GET /countries/highest-languages", () => {

        it("should return 200 and data", (done) => {
            request = createRequest({
                method: 'GET',
                url: '/countries/highest-languages',
              });

            sut.index(request, response), () => {
                expect(response.getHeaders()).toHaveProperty('content-type');
                expect(response.statusCode).toBe(200);
                expect(response.statusMessage).toBe("OK")
                expect(JSON.parse(response._getData())).toEqual(expect.arrayContaining([expect.any]))
            }  
            done()
        }, 2000)
    })
})