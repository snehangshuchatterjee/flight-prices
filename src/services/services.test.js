import * as services from './services';
import axios from 'axios';

describe("Services", () => {
    it("should call the axios get method", () => {
        services.getFilghtData();

        expect(axios.get).toHaveBeenCalled;
    });

    it("should call the axios post method", () => {
        services.getSessionData();

        expect(axios.post).toHaveBeenCalled;
    });
});