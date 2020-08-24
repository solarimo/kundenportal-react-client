import React from 'react';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Navbar } from './navbar/Navbar'


export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Navbar />
                <div className="content">Main Content</div>
                <Footer />
            </div>
        );
    }
}