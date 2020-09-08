import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { KundenPortal } from './main/kundenportal/KundenPortal';



export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <Header />
                    <div className="content">
                        <KundenPortal />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}