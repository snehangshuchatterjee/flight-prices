import React from 'react';
import { shallow } from "enzyme";

import CalendarComponent from "./";

import store from '../../../redux/store';

describe("Calendar Component", () => {
    let wrapper, price, source, destination;
    beforeEach(() => {
        price = ["$34.00", "$41.00", "$35.00"];
        source = "SIN";
        destination = "KUL"
        wrapper = shallow(<CalendarComponent store={store}
            price={price}
            source={source}
            destination={destination}
        />);
    });

    describe("render", () => {
        it("should render the component properly without crashing", () => {
            const localWrapper = wrapper.dive().dive();

            expect(localWrapper.find("div").length).toEqual(1);
        });

        it("should show the heading with source and destination if the source value is present", () => {
            const localWrapper = wrapper.dive().dive();
            localWrapper.setProps({
                source: source
            });

            expect(localWrapper.find("h2").length).toEqual(1);
        });
    });
});