import React from 'react';

import './location.css'

const LocationComponent = (props) => {
    const { id, label, items, onChange } = props
    return (
        <div className="inputField">
            <p className="labelField">{label + ": "}</p>
            <select onChange={onChange} className="dropdownItem">
                {items && items.map((item) => {
                    return <option
                        key={id}
                        id={id}
                        value={item + "-sky"}
                    >{item}</option>
                })}
            </select>
        </div>
    );
}

export default LocationComponent;