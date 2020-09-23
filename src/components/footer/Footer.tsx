import React from 'react';

import './Footer.css';

export const Footer = (): JSX.Element => {
    return (
        <div className="footer">
            <div>
                <div>
                    <img src={'/SOLARME-Logo-negative-RGB.svg'} alt="solarme logo negative"/>
                    <p>Tempelhofer Weg 44</p>
                    <p>10829 Berlin</p>
                    <p><a href="tel:+4930767582241">030/767 582 241</a></p>
                    <p><a href="mailto:kontakt@mysolarme.de">kontakt@mysolarme.de</a></p>
                </div>
            </div>
        </div>
    );
}