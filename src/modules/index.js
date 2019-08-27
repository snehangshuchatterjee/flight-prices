import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchComponent from './search/screens';
import CalendarComponent from './calendar/screens';

import './App.css'

class App extends Component {
    render = () => {
        const { loading } = this.props;
        return (
            <>
                {
                    loading ? <h3>Loading...</h3> :
                        <div className="appContainer">
                            <div><SearchComponent /></div>
                            <div><CalendarComponent /></div>
                        </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        loading: state.sessionReducer.loading
    });
}

export default connect(mapStateToProps)(App);