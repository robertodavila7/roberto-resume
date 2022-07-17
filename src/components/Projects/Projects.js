import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

import './Projects.scss';

const Projects = ({title}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fectchData = async () => {
            const call = await fetch('/data/data.json');
            const info = await call.json();
            if (title === 'Open-source Projects') {
                setData(info.projects);
            } else {
                setData(info.certifications);
            }
        };
        fectchData();
    }, [title]);
    let reverse = true;
    const projectsContent = (
        <div className="projects-wrapper">
            <h2>{title}</h2>
            <div className="projects-content">
                {data && data.map((ele) => {
                    reverse = !reverse;
                    return (
                        <div className={`project ${reverse ? 'reverse' : ''}`} key={`project-${ele.id}`}>
                            <div className="image">
                                <img src={ele.image} width="100%" alt={ele.name} />
                            </div>
                            <div className="description">
                                <ul>
                                    {ele.technologies.map((item, index) => <li key={`technologi-${index}`}>{item}</li>)}
                                </ul>
                                <h3>{ele.name}</h3>
                                <p>{ele.description}</p>
                                {
                                    ele.download ? (
                                        <p class="extra-link"><a href={ele.download} target="_blank" rel="noreferrer">Download Certificate</a></p>
                                    ) : (<></>)
                                }
                                {
                                    ele.live ? (
                                        <p class="extra-link"><a href={ele.live} target="_blank" rel="noreferrer">View Live Demo</a></p>
                                    ) : (<></>)
                                }
                                {
                                    ele.github ? (
                                        <p class="extra-link"><a href={ele.github} target="_blank" rel="noreferrer">View Source Code</a></p>
                                    ) : (<></>)
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return (
        <>
            <Card content={projectsContent} />
        </>
    );
};

export default Projects;