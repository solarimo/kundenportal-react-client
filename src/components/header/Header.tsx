import React, { FunctionComponent } from 'react';
import { Navbar } from '../navbar/Navbar';

export const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <img height="60" src={'./Logo_SolarME-300x71.png'} alt="Solarme Logo"/>
            <h1>Mein Kundenportal</h1>
        </div>
    );
}
