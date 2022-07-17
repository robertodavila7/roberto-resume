import React from "react";

import Card from "../Card/Card";
import './Bio.scss';

const Bio = () => {
    const bio = (
        <div className="bio-wrapper">
            <div className="about-me">
                <h2>About Me</h2>
                <p>Hello! I'm Roberto Dávila. I'm fullstack developer with 14 years of experiences working in different projects with customers around the world.</p>
                <p>I am a quick learner and a team worker that gets the job done.</p>
            </div>
            <div className="bio">
                <h2>Basic Information</h2>
                <div className="bio-item">
                    <div className="label">
                        <i className="far fa-calendar-alt"></i> Age
                    </div>
                    <div className="value">
                        36
                    </div>
                </div>
                <div className="bio-item">
                    <div className="label">
                        <i className="far fa-envelope"></i> Email
                    </div>
                    <div className="value">
                        roberto.davila@pixelania.com
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <Card content={bio}></Card>
    )
};

export default Bio;