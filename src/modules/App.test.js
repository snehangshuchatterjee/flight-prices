import React from 'react';
import { shallow } from "enzyme";

import App from "./";

import store from '../redux/store';

describe("App Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App store={store} />);
    });

    describe("render", () => {
        it("should render the component properly without crashing", () => {
            const localWrapper = wrapper.dive().dive();
            expect(localWrapper.find("div").length).toEqual(3);
        });

        it("should render Loading if loading props is true", () => {
            const localWrapper = wrapper.dive().dive();
            localWrapper.setProps({
                loading: true
            });
            expect(localWrapper.find("h3").length).toEqual(1);
        });
    });
});