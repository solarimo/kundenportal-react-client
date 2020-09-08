import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { PersonalData } from './main/PersonalData';
import { Zaehlerstaende } from './main/Zaehlerstaende';
import { MeinVertrag } from './main/MeinVertrag';
import { DokumenteUndRechnungen } from './main/DokumenteUndRechnungen';
import { Navbar } from './header/navbar/Navbar';


export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <Header />
                    <div className="content">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={PersonalData}/>
                            <Route exact path="/meine-daten" component={PersonalData}/>
                            <Route exact path="/zaehlerstaende" component={Zaehlerstaende}/>
                            <Route exact path="/mein-vertrag" component={MeinVertrag}/>
                            <Route exact path="/dokumente-und-rechnungen" component={DokumenteUndRechnungen}/>
                        </Switch>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}