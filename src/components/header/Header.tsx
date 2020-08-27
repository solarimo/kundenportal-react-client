import React, { FunctionComponent } from 'react';
import { Navbar } from './navbar/Navbar';
import './Header.css';

export const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <div className="headline">
                <img height="60" src={'./Logo_SolarME-300x71.png'} alt="Solarme Logo"/>
                <h1>Mein Kundenportal</h1>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}
