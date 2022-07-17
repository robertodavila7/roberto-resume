import React, { useState, useEffect} from "react";
import Element from "./Element/Element";
import Card from "../Card/Card";
import './Experience.scss';

const Experience = ({title}) => {
    const [data, setData] = useState([]);
    const [color, setColor] = useState('primary');
    useEffect(() => {
        const fetchData = async () => {
            const call = await fetch('/data/data.json');
            const info = await call.json();
            if (title === 'Work Experience') {
                setData(info.work);
            } else if (title === 'Education') {
                setColor('secondary');
                setData(info.education);
            }
        };
        fetchData();
    }, [title]);
    const getClassNames = () => {
        if (title === 'Work Experience') {
            return 'experience-elements';
        } else {
            return 'experience-elements education';
        }
    }
    const content = (
        <div className="experience">
            <h2>{title}</h2>
            <div className={getClassNames()}>
                {data && data.map((ele) => {
                    return (
                        <Element key={title + ele.id} color={color} data={ele} />
                    );
                })}
            </div>
        </div>
    );
    return (
        <Card content={content}></Card>
    )
};

export default Experience;