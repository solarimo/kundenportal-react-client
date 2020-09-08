import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PersonalData } from './subcomponents/PersonalData';
import { DokumenteUndRechnungen } from './subcomponents/DokumenteUndRechnungen';
import { MeinVertrag } from './subcomponents/MeinVertrag';
import { Zaehlerstaende } from './subcomponents/Zaehlerstaende';
import { Navbar } from './navbar/Navbar';


export class KundenPortal extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/portal" component={PersonalData}/>
          <Route exact path="/portal/meine-daten" component={PersonalData}/>
          <Route exact path="/portal/zaehlerstaende" component={Zaehlerstaende}/>
          <Route exact path="/portal/mein-vertrag" component={MeinVertrag}/>
          <Route exact path="/portal/dokumente-und-rechnungen" component={DokumenteUndRechnungen}/>
        </Switch>
      </div>
    )
  }
}