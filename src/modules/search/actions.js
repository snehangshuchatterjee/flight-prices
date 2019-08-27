import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { getSessionDataString, getSessionId, getLowestPrice, getFlightPriceDefaultURLParams } from "./utils/utilityFunctions";

import * as endPoints from './utils/endpoints';
import * as headers from './utils/headers';

export const createSession = (sessionData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: actionTypes.CREATE_SESSION
            });
            const data = getSessionDataString(sessionData);
            const postHeaders = headers.getHeaders();

            const response = await axios.post(endPoints.SESSION_BASE_URL, data, { headers: postHeaders });

            const sessionId = getSessionId(response.headers.location);

            dispatch(getFlightPrice(sessionId));
        }
        catch (error) {
            dispatch({
                type: actionTypes.CREATE_SESSION_FAIL,
                payload: error
            });
        }
    }
}

export const getFlightPrice = (sessionId) => {
    return async (dispatch) => {
        try {
            const constantParams = getFlightPriceDefaultURLParams();
            const postHeaders = headers.getHeaders();

            const response = await axios.get(`${endPoints.FLIGHT_PRICE_URL}/${sessionId}?${constantParams}`, { headers: postHeaders });

            const price = getLowestPrice(response.data);

            dispatch({
                type: actionTypes.CREATE_SESSION_SUCCESS,
                payload: price
            });
        }
        catch (error) {
            dispatch({
                type: actionTypes.CREATE_SESSION_FAIL,
                payload: error
            });
        }
    }
}

export const resetFares = () => {
    return ({
        type: actionTypes.RESET_FARES
    });
}

export const setSourceAndDestination = (data) => {
    return ({
        type: actionTypes.SET_SOURCE_AND_DESTINATION,
        payload: data
    });
}
