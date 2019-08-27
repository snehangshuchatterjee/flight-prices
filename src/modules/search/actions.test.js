// importing the type
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { getSessionDataString } from "./utils/utilityFunctions";
import { SESSION_BASE_URL } from "./utils/endpoints";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);

const store = mockStore({});

describe("Create Sessions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('call the fetch prices action', async () => {
        mock.onPost(SESSION_BASE_URL).reply(201);

        let result = {};

        result.country = "US";
        result.currency = "USD";
        result.locale = "en-US";
        result.origin = "KUL-sky";
        result.destination = "SIN-sky";
        result.outDate = "2019-08-27";
        result.headCount = "1";

        await store.dispatch()

        // store.dispatch(actions.createSession(result)).then(() => {
        //     let expectedActions = {
        //         type: actionTypes.CREATE_SESSION
        //     }

        //     expect.assertions(1);
        //     expect(store.getActions().type).toEqual(expectedActions.type);
        // });
    });
});

describe.only("Fetch Flight Prices", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('call the fetch prices action', async () => {
        const sessionId = "d3f747cf-7842-48e0-b9be-9caf5ce7949d";

        await store.dispatch(actions.getFlightPrice(sessionId))

        expect(store.dispatch).toHaveBeenCalled;
    });
});