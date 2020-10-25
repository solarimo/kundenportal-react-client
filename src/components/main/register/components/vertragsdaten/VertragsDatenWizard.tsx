import React from 'react';
import { CalculationView } from '../CalculationView';
import { Kontoverbindung } from './Kontoverbindung';
import { Optional } from './Optional';
import { PersoenlicheDaten } from './PersoenlicheDaten';
import { ZaehlerDaten } from './ZaehlerDaten';

interface State {
  page: Page;
}

enum Page {
  PERSOENLICHE_DATEN ,
  ZAEHLER_DATEN,
  KONTOVERBINDUNG,
  OPTIONAL,
}

export class VertragsDatenWizard extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      page: Page.PERSOENLICHE_DATEN
    }
  }

  onSubmit = () => {

  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  prevPage = () => {
    this.setState({page: this.state.page - 1});
  }

  renderPage = () => {
    
    switch(this.state.page) {
      case Page.PERSOENLICHE_DATEN:
        return <PersoenlicheDaten onSubmit={this.nextPage} />;
      case Page.ZAEHLER_DATEN:
        return <ZaehlerDaten onBack={this.prevPage} onSubmit={this.nextPage} />;
      case Page.KONTOVERBINDUNG:
        return <Kontoverbindung onBack={this.prevPage} onSubmit={this.nextPage} />;
      case Page.OPTIONAL:
        return <Optional onBack={this.prevPage} onSubmit={this.onSubmit} />
    }
  }

  render() {
    return (
      <div className="register-wizzard">
        <div className="vertragsdaten-fragmnet">
        {this.renderPage()}
        </div>
        <CalculationView />
      </div>
    );
  }
}