import React from 'react';
import { shallow } from 'enzyme';

import SearchComponent from "./";
import LocationComponent from '../../common/location';
import * as actions from "../actions";

import store from '../../../redux/store';

describe("Location Component", () => {
    const priceArray = ["$1", "$2", "$3"];
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SearchComponent store={store}
            price={priceArray}
        />);
    });

    describe("render", () => {
        it("should render the component properly", () => {
            const localWrapper = wrapper.dive().dive();
            expect(localWrapper.find(LocationComponent).length).toEqual(2);
        });
    });

    describe("Handle Source Change", () => {
        it("should set the source value to the state", () => {
            const expectedOutcome = "dummyText";
            const event = {
                target: {
                    value: expectedOutcome
                }
            }
            const localWrapper = wrapper.dive().dive();
            localWrapper.instance().handleSourceChange(event);

            expect(localWrapper.state().source).toEqual(expectedOutcome);
        })
    });

    describe("Handle Submit", () => {
        it("should set the destination value to the state", () => {
            let localWrapper = wrapper.dive().dive();
            store.dispatch = jest.fn;
            localWrapper.setState({
                source: "KUL-sky",
                destination: "SIN-sky"
            });
            localWrapper.instance().handleSubmit();

            expect(actions.createSession).toHaveBeenCalled;
        })
    });

    describe("Handle destination Change", () => {
        it("should set the source value to the state", () => {
            const expectedOutcome = "dummyText";
            const event = {
                target: {
                    value: expectedOutcome
                }
            }
            const localWrapper = wrapper.dive().dive();
            localWrapper.instance().handleDestinationChange(event);

            expect(localWrapper.state().destination).toEqual(expectedOutcome);
        })
    });
});