import React from 'react';

import { FormField } from './components/FormField';

export class AddressCheck extends React.Component {

  render() {
    return (
      <div className="address-component">
          <h3>Bitte nennen Sie uns Ihre Adresse. Wir prüfen für Sie, ob der Solarstrom vom Dach in Ihrer Wohnung verfügbar ist.</h3>
          <form>
            <FormField
              id="address-input"
              labelName="Suchen sie hier nach Ihrer Adresse:"
            />
            <div id="address-container">
              <div className="flex-container">
                <FormField id="strasse" labelName="Straße" width="75%" />
                <FormField id="hausnummer" labelName="Hausnummer" width="25%" />
              </div>
              <div className="flex-container">
                <FormField id="postleitzahl" labelName="Postleitzahl" width="50%" />
                <FormField id="stadt" labelName="Stadt" width="50%" />
              </div>
            </div>
          </form>
          <button type="submit">Zu Ihrem Tarif</button>
        </div>
    );
  }
}