import React from 'react';
import { PrimaryButton } from '../../global-components/PrimaryButton';

import { FormField } from './FormField';

export class AddressCheck extends React.Component {

  render() {
    return (
      <div className="address-component">
        <h2>Bitte nennen Sie uns Ihre Adresse. Wir prüfen für Sie, ob der Solarstrom vom Dach in Ihrer Wohnung verfügbar ist.</h2>
        <form>
          <div id="address-container">
            <FormField
              id="address-input"
              labelName="Suchen sie hier nach Ihrer Adresse:"
            />
            <br/>
            <div className="flex-container">
              <FormField id="strasse" labelName="Straße" width="75%" />
              <FormField id="hausnummer" labelName="Hausnummer" width="25%" />
            </div>
            <div className="flex-container">
              <FormField id="postleitzahl" labelName="Postleitzahl" width="50%" />
              <FormField id="stadt" labelName="Stadt" width="50%" />
            </div>
            <div className="flex-btn">
              <PrimaryButton text="Zu Ihrem Tarif" />
            </div>
          </div>

        </form>
      </div>
    );
  }
}