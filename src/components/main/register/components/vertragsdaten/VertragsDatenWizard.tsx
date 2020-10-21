import React from 'react';
import { Kontoverbindung } from './Kontoverbindung';
import { PersoenlicheDaten } from './PersoenlicheDaten';
import { ZaehlerDaten } from './ZaehlerDaten';

interface State {
  page: Page;
}

enum Page {
  PERSOENLICHE_DATEN ,
  ZAEHLER_DATEN,
  KONTOVERBINDUNG
}

export class VertragsDatenWizard extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      page: Page.KONTOVERBINDUNG
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
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}