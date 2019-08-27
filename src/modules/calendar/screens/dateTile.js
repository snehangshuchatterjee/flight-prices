import React from "react";
import { MONTH_ARRAY } from "../utils/constants";

import "../styles/dateTileComponent.css";

const DateTileComponent = (props) => {
    const { date, price } = props;
    return (
        <>
            {date === "" ? <div className="emptySlotItem"></div> :
                <div className={"grid-item grid-data"}>
                    <div className="dateItem">{new Date(date).getDate()}</div>
                    <div className="monthItem">{`${MONTH_ARRAY[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`}</div>
                    <div className="priceItem">{price}</div>
                </div>
            }
        </>
    );
}

export default DateTileComponent;