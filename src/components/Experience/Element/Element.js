import React from "react";
import './Element.scss';

const Element = ({data, color}) => {
    return (
        <div className={`element-wrapper ${color}`}>
            <div className="element-title">
                <h3>{data.name} <span>at {data.place}</span></h3>
            </div>
            <div className="element-body">
                <div className="date">
                    {data.date}
                </div>
                <div className="description">
                    {data.description}
                </div>
            </div>
        </div>
    );
};

export default Element;