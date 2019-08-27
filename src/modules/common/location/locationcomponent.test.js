import React from 'react';
import { shallow } from 'enzyme';

import LocationComponent from "./";

describe("Location Component", () => {
    const id = "";
    const label = "";
    const items = ["", ""];
    const onChange = () => { }
    const wrapper = shallow(<LocationComponent id={id}
        label={label}
        items={items}
        onChange={onChange}
    />);

    describe("render", () => {
        it("should render the component properly", () => {
            expect(wrapper.find("div").length).toEqual(1);
        })
    })
});