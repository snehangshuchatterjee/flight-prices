import React from 'react';
import { shallow } from "enzyme";

import DateHeadingComponent from "./dateHeading";

describe("Calendar Component", () => {
    let wrapper, day;
    beforeEach(() => {
        day = "Mon";
        wrapper = shallow(<DateHeadingComponent day={day} />);
    });

    describe("render", () => {
        it("should render the component properly without crashing", () => {
            expect(wrapper.find("div").length).toEqual(2);
        });
    });
});