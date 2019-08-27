import * as actionTypes from "./actionTypes";

const initialState = {
    price: [],
    loading: false,
    errorText: "",
    source: "",
    destination: ""
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_SESSION: {
            return {
                ...state,
                loading: true,
                errorText: ""
            };
        }
        case actionTypes.CREATE_SESSION_SUCCESS: {
            return {
                ...state,
                price: state.price.concat(action.payload),
                loading: false
            };
        }
        case actionTypes.CREATE_SESSION_FAIL: {
            return {
                ...state,
                errorText: action.payload || "Unable to establish a session"
            };
        }
        case actionTypes.RESET_FARES: {
            return {
                ...state,
                price: []
            };
        }
        case actionTypes.SET_SOURCE_AND_DESTINATION: {
            return {
                ...state,
                source: action.payload.source,
                destination: action.payload.destination
            };
        }
        default:
            return state;
    }
}

