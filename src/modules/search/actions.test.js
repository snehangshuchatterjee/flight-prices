import configureMockStore from 'redux-mock-store';
import * as actionTypes from "./actionTypes";
import thunk from 'redux-thunk';
import { createSession, getFlightPrice } from "./actions";

jest.mock('../../services/services');
jest.mock('./utils/utilityFunctions');
import { getSessionData, getFilghtData } from '../../services/services';
import { getLowestPrice } from './utils/utilityFunctions';




getLowestPrice.mockImplementation((data) => {
    return `$3.00`;
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const getPostData = () => {
    let result = {};

    result.country = "US";
    result.currency = "USD";
    result.locale = "en-US";
    result.origin = "SIN";
    result.destination = "KUL";
    result.outDate = "2019-08-28";
    result.headCount = "1";

    return result;
}

describe('Search Actions', () => {
    let store;
    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore({});
    });

    describe('Create Session', () => {
        it('should fetch the session', async () => {
            getSessionData.mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    resolve({
                        headers: {
                            location: "www.testurl.com/9aa2ea23-90c5-46e1-9df6-f4b4cf9fcf4c"
                        }
                    });
                })
            });
            await store.dispatch(createSession(getPostData()));

            expect(getFlightPrice).toHaveBeenCalled;
        });

        it('should throw an error for an incorrect API call', async () => {
            getSessionData.mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    reject("New Error");
                })
            });
            await store.dispatch(createSession(getPostData()));

            const expectedOutcome = [{
                type: actionTypes.CREATE_SESSION_FAIL
            }];

            expect(store.getActions().type).toEqual(expectedOutcome.type);
        });
    });

    describe('Flight Prices', () => {
        it('should fetch the price details', async () => {
            getFilghtData.mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    resolve({
                        Itineraries: [{
                            PricingOptions: [{
                                Price: "3"
                            }]
                        }]
                    });
                })
            });
            const sessionId = "ec0c76a2-9d5b-4b20-8ae7-9989121c4f07";
            await store.dispatch(getFlightPrice(sessionId));
            const expectedOutcome = [{
                type: actionTypes.CREATE_SESSION_SUCCESS,
                payload: "$3.00"
            }]

            expect(store.getActions()).toEqual(expectedOutcome);
        });

        it('should throw an error for an incorrect API call', async () => {
            getFilghtData.mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    reject("New Error");
                })
            });
            const sessionId = "";
            await store.dispatch(getFlightPrice(sessionId));
            const expectedOutcome = [{
                type: actionTypes.CREATE_SESSION_FAIL
            }];

            expect(store.getActions().type).toEqual(expectedOutcome.type);
        });
    });
});