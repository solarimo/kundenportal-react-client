import React from 'react';
import { PersoenlicheDaten } from './PersoenlicheDaten';
import { ZaehlerDaten } from './ZaehlerDaten';

interface VertragsDatenWizardState {
  page: Page;
}

enum Page {
  PERSOENLICHE_DATEN ,
  ZAEHLER_DATEN
}

export class VertragsDatenWizard extends React.Component<{}, VertragsDatenWizardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      page: Page.ZAEHLER_DATEN
    }
  }

  onSubmit = () => {

  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPage = () => {
    console.log(this.state.page);
    
    switch(this.state.page) {
      case Page.PERSOENLICHE_DATEN:
        return <PersoenlicheDaten onSubmit={this.nextPage} />
      case Page.ZAEHLER_DATEN:
        return <ZaehlerDaten />
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