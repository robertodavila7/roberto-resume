import React, {useState, useEffect} from "react";

import Card from "../Card/Card";
import ProgressBar from "./ProgressBar/ProgressBar";
import './ProfessionalSkills.scss';

const ProfessionalSkills = () => {
    const [data, setData] = useState([]);
    let odd = false;
    useEffect(() => {
        const fectchData = async () => {
            const call = await fetch('/data/data.json');
            const info = await call.json();
            setData(info.skills);
        };
        fectchData();
    }, []);
    const isOdd = () => {
        odd = !odd;
        return odd;
    };
    const skillsContent = (
        <div className="professional-skills-wrapper">
            <h2>Professional Skills</h2>
            <div className="professional-skills-content">
                {data && data.map((val) =>  {
                    return (
                        <div key={val.name} className="professional-skills-item">
                            <ProgressBar isodd={isOdd() ? 1 : 0} name={val.name} value={val.value} label={val.label} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return (
        <Card content={skillsContent}></Card>
    );
};

export default ProfessionalSkills;