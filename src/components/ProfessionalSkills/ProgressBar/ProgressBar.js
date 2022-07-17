import React, {useState} from "react";

import './ProgressBar.scss';

const ProgressBar = ({name, value, label, isodd}) => {
    const [width, setWidth] = useState(0);
    setTimeout(() => setWidth(value), 1000);
    return (
        <div className="progress-bar">
            <label>{name}</label>
            <div className="bar">
                <div className={`progress ${isodd === 0 ? 'odd' : 'even'}`} style={{width: `${width}%`, opacity: 1}}>
                    {label}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;