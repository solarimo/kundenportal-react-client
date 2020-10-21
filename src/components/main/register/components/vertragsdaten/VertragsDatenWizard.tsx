import React from 'react';
import { PersoenlicheDaten } from './PersoenlicheDaten';
import { ZaehlerDaten } from './ZaehlerDaten';

interface State {
  page: Page;
}

enum Page {
  PERSOENLICHE_DATEN ,
  ZAEHLER_DATEN
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
        return <PersoenlicheDaten onSubmit={this.nextPage} />
      case Page.ZAEHLER_DATEN:
        return <ZaehlerDaten onBack={this.prevPage} onSubmit={this.nextPage} />
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