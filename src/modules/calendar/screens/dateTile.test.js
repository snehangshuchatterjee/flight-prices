import React from 'react';
import { shallow } from "enzyme";

import DateTileComponent from "./dateTile";

import store from '../../../redux/store';

describe("Calendar Component", () => {
    let wrapper, price, today, date;
    beforeEach(() => {
        price = ["$34.00", "$41.00", "$35.00"];
        today = new Date();
        date = [today, new Date(today + 1), new Date(today + 2)]
        wrapper = shallow(<DateTileComponent store={store}
            price={price}
            date={date}
        />);
    });

    describe("render", () => {
        it("should render the component properly without crashing", () => {
            expect(wrapper.find("div").length).toEqual(4);
        });

        it("should render an empty div if the date item is empty", () => {
            let newDate = "";
            wrapper.setProps({
                date: newDate
            });

            expect(wrapper.find("div").length).toEqual(1);
        })
    });
});