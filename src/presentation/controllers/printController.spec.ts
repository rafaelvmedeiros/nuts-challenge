import { Request, Response } from "express";
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
  
import PrintController from "./printerController"

describe("Print Controller", () => {
    let sut = PrintController;
    let request: MockRequest<Request>;
    let response: MockResponse<Response>;

    beforeEach(() => {
        response = createResponse();
    })

    it("should be defined", () => {
        expect(sut).toBeDefined()
    })

    describe("GET /print-numbers", () => {

        it("should return 200 and data", (done) => {
            request = createRequest({
                method: 'GET',
                url: '/print-numbers?range=100',
              });

            sut.index(request, response), () => {
                expect(response.getHeaders()).toHaveProperty('content-type');
                expect(response.statusCode).toBe(200);
                expect(response.statusMessage).toBe("OK")
                expect(JSON.parse(response._getData())).toEqual(expect.arrayContaining([expect.any]))
            }  
            done()
        }, 2000)
        
        it("should define a default range when user doesn't input it and return status 200 and data", (done) => {
            request = createRequest({
                method: 'GET',
                url: '/print-numbers',
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