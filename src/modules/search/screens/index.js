import React, { Component } from 'react';
import { connect } from "react-redux";
import LocationComponent from '../../common/location';

import { createSession, resetFares, setSourceAndDestination } from "../actions";
import * as constants from "../utils/constants";
import { formatDate } from "../utils/utilityFunctions";
import { getCalendarDates } from "../../calendar/utils/utilityFunctions";

import '../styles/search.css'

class SearchComponent extends Component {
    state = {
        source: "",
        destination: "",
        destinationArray: ""
    }

    handleSourceChange = (event) => {
        const source = event.target.value;
        const destPrefix = `DEST_${source.split("-")[0]}`;

        this.setState({
            source: event.target.value,
            destinationArray: constants[destPrefix]
        });
    }

    handleDestinationChange = (event) => {
        this.setState({
            destination: event.target.value
        });
    }

    handleSubmit = () => {
        const dates = getCalendarDates();
        const { createSession, resetFares, setSourceAndDestination } = this.props;
        const { source, destination } = this.state;

        resetFares();
        setSourceAndDestination({
            source: source.split("-")[0],
            destination: destination.split("-")[0]
        });

        dates.map((date) => {
            const formattedDate = formatDate(date);
            const apiData = this.getDataToHitBackendAPI(formattedDate);

            createSession(apiData);
        });
    }

    getDataToHitBackendAPI = (date) => {
        let result = {};

        result.country = "US";
        result.currency = "USD";
        result.locale = "en-US";
        result.origin = this.state.source;
        result.destination = this.state.destination;
        result.outDate = date;
        result.headCount = "1";

        return result;
    }

    render = () => {
        return (
            <div key="searchComponent" className="searchComponent">
                <h2 className="searchHeading">Search Flights</h2>
                <LocationComponent id="sourceSelectKey"
                    label="Source"
                    items={constants.SOURCE}
                    onChange={this.handleSourceChange}
                />
                <LocationComponent id="destinationSelect"
                    key="destinationSelect"
                    label="Destination"
                    items={this.state.destinationArray}
                    onChange={this.handleDestinationChange}
                />
                <input type="submit"
                    value="Get Fares"
                    onClick={this.handleSubmit}
                    className="getFaresButtonItem"
                />
                <div className="errorText">{this.props.errorText}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return ({
        price: state.sessionReducer.price,
        errorText: state.sessionReducer.errorText
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createSession: (sessionData) => dispatch(createSession(sessionData)),
        resetFares: () => dispatch(resetFares()),
        setSourceAndDestination: (data) => dispatch(setSourceAndDestination(data))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);