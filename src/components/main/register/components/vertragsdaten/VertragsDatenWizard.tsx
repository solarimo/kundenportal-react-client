import React from 'react';
import { PersoenlicheDaten } from './PersoenlicheDaten';

interface VertragsDatenWizardState {
  page: Page;
}

enum Page {
  PERSOENLICHE_DATEN
}

export class VertragsDatenWizard extends React.Component<{}, VertragsDatenWizardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      page: Page.PERSOENLICHE_DATEN
    }
  }

  renderPage = () => {
    switch(this.state.page) {
      case Page.PERSOENLICHE_DATEN:
        return <PersoenlicheDaten />
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