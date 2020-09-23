import React, { FunctionComponent } from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

export const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <div className="headline">
                <Link  to="/" >
                    <img height="60" src={'/Logo_SolarME-300x71.png'} alt="Solarme Logo"/>
                </Link>
                <h1>Mein Portal</h1>
            </div>
        </div>
    );
}
