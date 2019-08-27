import React, { Component } from "react";
import { connect } from "react-redux";
import DateTileComponent from "./dateTile";
import DateHeadingComponent from "./dateHeading";
import { DAY_ARRAY } from "../utils/constants";

import '../styles/calendar.css';
import { getCalendarDates } from "../utils/utilityFunctions";

class CalendarComponent extends Component {
    state = {
        dateArray: []
    }

    componentDidMount = () => {
        const dates = getCalendarDates();
        this.setState({
            dateArray: dates
        });
    }

    formatDateAndPriceArrays = () => {
        const { price } = this.props;
        let { dateArray } = this.state;
        let firstDate = dateArray[0];
        let lastDate = dateArray[dateArray.length - 1];
        let firstDay = new Date(firstDate).getDay();
        let lastDay = new Date(lastDate).getDay();
        let finalDateArray = [];
        let finalPriceArray = [];

        //Adding empty values in the arrays to mark empty cells in the calendar depending on the day
        for (let i = 0; i < firstDay; i++) {
            finalDateArray.push("");
            finalPriceArray.push("")
        }

        //Adding the data to these arrays
        finalDateArray.push(...dateArray);
        finalPriceArray.push(...price);

        //Adding empty values in the date array so that there are empty slots to complete the week
        for (let i = lastDay; i < 6; i++) {
            finalDateArray.push("");
        }

        return {
            finalDateArray,
            finalPriceArray
        };
    }

    render = () => {
        const dateAndPriceArrays = this.formatDateAndPriceArrays();
        const { source, destination } = this.props;

        return (
            <>
                {source && <h2>Showing flight fares from {source} to {destination}</h2>}
                <div className="grid-container">
                    {DAY_ARRAY.map((day) => {
                        return <DateHeadingComponent key={day}
                            day={day}
                        />
                    })}
                    {dateAndPriceArrays.finalDateArray.map((date, index) => {
                        return <DateTileComponent date={date}
                            key={new Date(date).getDate()}
                            price={dateAndPriceArrays.finalPriceArray[index]}
                        />
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        price: state.sessionReducer.price,
        source: state.sessionReducer.source,
        destination: state.sessionReducer.destination
    });
}

export default connect(mapStateToProps)(CalendarComponent);