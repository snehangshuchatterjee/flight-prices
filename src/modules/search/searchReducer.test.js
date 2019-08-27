import * as actionTypes from './actionTypes';
import { sessionReducer } from './reducer';

describe("Selected Article Reducer", () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            price: [],
            loading: false,
            errorText: "",
            source: "",
            destination: ""
        };
    });
    describe("Set Selected Article", () => {
        it("should return loading = true if CREATE_SESSION action is fired", () => {
            const action = {
                type: actionTypes.CREATE_SESSION
            }
            let expectedOutcome = initialState;
            expectedOutcome.loading = true;
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });

        it("should return the price array if CREATE_SESSION_SUCCESS action is fired", () => {
            const action = {
                type: actionTypes.CREATE_SESSION_SUCCESS,
                payload: [""]
            }
            let expectedOutcome = initialState;
            expectedOutcome.loading = false;
            expectedOutcome.price = [""];
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });

        it("should return the error message if CREATE_SESSION_FAIL action is fired", () => {
            const action = {
                type: actionTypes.CREATE_SESSION_FAIL
            }
            let expectedOutcome = initialState;
            expectedOutcome.errorText = "Unable to establish a session";
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });

        it("should reset the price array if RESET_FARES action is fired", () => {
            const action = {
                type: actionTypes.RESET_FARES
            }
            let expectedOutcome = initialState;
            expectedOutcome.price = [];
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });

        it("should return the source and destination if SET_SOURCE_AND_DESTINATION action is fired", () => {
            const action = {
                type: actionTypes.SET_SOURCE_AND_DESTINATION,
                payload: {
                    source: "SIN",
                    destination: "KUL"
                }
            }
            let expectedOutcome = initialState;
            expectedOutcome.source = "SIN";
            expectedOutcome.destination = "KUL";
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });

        it("should return the initial state if any other action is fired", () => {
            const action = {
                type: "TEST_ACTION"
            }
            let expectedOutcome = initialState;
            expect(sessionReducer(undefined, action)).toEqual(expectedOutcome);
        });
    });
});