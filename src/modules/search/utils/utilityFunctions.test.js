import * as utils from './utilityFunctions'

describe("Utility Functions", () => {
    describe("formatDate", () => {
        it("should return the date in yyyy-mm-dd format", () => {

            const date = new Date("2019-10-26");
            const expectedOutcome = "2019-10-26"

            expect(utils.formatDate(date)).toEqual(expectedOutcome);
        })
    });

    describe("getSessionId", () => {
        it("should get the session id from the response headers", () => {
            const headers = "www.dummyurl.com/dummypath";
            const expectedOutcome = "dummypath"

            expect(utils.getSessionId(headers)).toEqual(expectedOutcome);
        })
    });

    describe("getLowestPrice", () => {
        it("should get the lowest fare from the server data", () => {
            JSON.parse = jest.fn().mockImplementation((data) => data);
            const serverResponse = {
                Itineraries: [{
                    PricingOptions: [{
                        Price: 3
                    }]
                }]
            }
            const expectedOutcome = "$3.00";

            expect(utils.getLowestPrice(serverResponse)).toEqual(expectedOutcome);
        });
        it("should return $0.00 if there are no itineraries", () => {
            JSON.parse = jest.fn().mockImplementation((data) => data);
            const serverResponse = {
                Itineraries: []
            }
            const expectedOutcome = "$0.00";

            expect(utils.getLowestPrice(serverResponse)).toEqual(expectedOutcome);
        })
    });

    describe("getFlightPriceDefaultURLParams", () => {
        it("should return the default params for getting the prices from the backend api", () => {
            const expectedOutcome = "sortType=price&sortOrder=asc&pageIndex=0&pageSize=10";
            expect(utils.getFlightPriceDefaultURLParams()).toEqual(expectedOutcome);
        });
    });
});