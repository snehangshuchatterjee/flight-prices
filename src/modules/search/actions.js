import * as actionTypes from "./actionTypes";
import { getSessionDataString, getSessionId, getLowestPrice, getFlightPriceDefaultURLParams } from "./utils/utilityFunctions";

import * as headers from './utils/headers';
import * as services from '../../services/services';

export const createSession = (sessionData) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CREATE_SESSION
        });
        const data = getSessionDataString(sessionData);
        const postHeaders = headers.getHeaders();

        services.getSessionData(data, postHeaders)
            .then((response) => {
                const sessionId = getSessionId(response.headers.location);

                dispatch(getFlightPrice(sessionId));
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.CREATE_SESSION_FAIL,
                    payload: error
                });
            });
    }
}

export const getFlightPrice = (sessionId) => {
    return (dispatch) => {
        const constantParams = getFlightPriceDefaultURLParams();
        const requestHeaders = headers.getHeaders();

        services.getFilghtData(sessionId, constantParams, requestHeaders)
            .then((response) => {
                const price = getLowestPrice(response.data);

                dispatch({
                    type: actionTypes.CREATE_SESSION_SUCCESS,
                    payload: price
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.CREATE_SESSION_FAIL,
                    payload: error
                });
            });
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
