import React from "react";

import "../styles/dateTileComponent.css";

const DateHeadingComponent = (props) => {
    const { day } = props;
    return (
        <div className={"grid-item grid-header"}>
            <div className="dateHeaderItem">{day}</div>
        </div>
    );
}

export default DateHeadingComponent;