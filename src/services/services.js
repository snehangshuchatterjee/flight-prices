import axios from 'axios';
import * as endPoints from '../modules/search/utils/endpoints';

export const getSessionData = (data, postHeaders) => {
    return axios.post(endPoints.SESSION_BASE_URL, data, { headers: postHeaders });
}

export const getFilghtData = (sessionId, params, postHeaders) => {
    return axios.get(`${endPoints.FLIGHT_PRICE_URL}/${sessionId}?${params}`, { headers: postHeaders });
}