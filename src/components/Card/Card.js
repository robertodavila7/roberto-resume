import React from "react";
import './Car.scss';

const Card = (props) => {
    return (
        <div className="card-wrapper">{props.content}</div>
    );
};

export default Card;