import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { KundenPortal } from './main/kundenportal/KundenPortal';
import { Welcome } from './main/welcome/Welcome';
import { Register } from './main/register/Register';



export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <Header />
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/portal" component={KundenPortal}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}