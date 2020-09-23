import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { PrimaryButton } from '../../../global-components/PrimaryButton';
import { required, mustBeNumber, mustbe5long } from '../../../../util/ValidationRules';

import './AddressCheck.css'


class GoogleResponseAddress {
  street_number: string = '';
  postal_code: string = '';
  locality: string = '';
  route: string = '';
}

class AddressCheck extends React.Component<InjectedFormProps> {

  private autocomplete: google.maps.places.Autocomplete | null = null;

  componentDidMount() {
    const input: HTMLInputElement = document.getElementById('address-input') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setAddressFields);
  }

  setAddressFields = () => {
    const response: google.maps.places.PlaceResult = this.autocomplete!.getPlace();
    const responseAddress: GoogleResponseAddress = new GoogleResponseAddress();

    for (const item of response.address_components!) {
      const addrType: string | undefined = item.types[0];
      if (responseAddress[addrType as keyof GoogleResponseAddress] !== undefined) {
        responseAddress[addrType as keyof GoogleResponseAddress] = item.long_name;
      }
    }

    this.props.change('strasse', responseAddress.route);
    this.props.change('hausnummer', responseAddress.street_number);
    this.props.change('postleitzahl', parseInt(responseAddress.postal_code));
    this.props.change('stadt', responseAddress.locality);
  }

  renderInput({label, input, meta}: any) {
    return (
      <div>
        <label>{label}</label>
        <input className={(meta.touched && meta.error) ? 'field-error' : '' } {...input} type="text" />
    {(meta.touched && meta.error) &&  <span style={{ color: 'red', fontSize: '10px' }} >{meta.error}</span> }
      </div>
    );
  }

  onSubmit = (formValues: any) => {
    
  }

  render() {
    return (
      <div>
        <h2>Bitte nennen Sie uns Ihre Adresse. Wir prüfen für Sie, ob der Solarstrom vom Dach in Ihrer Wohnung verfügbar ist.</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="address-container">
            <label htmlFor="">Suchen Sie hier nach Ihrer Addresse</label>
            <input id="address-input" type="text" placeholder=". . ."/>
            <br />
            <div className="flex-container">
              <div style={{ width: '75%' }}>
                <Field label="Straße" name="strasse" component={this.renderInput} validate={[required]}  />
              </div>
              <div style={{ width: '25%' }}>
                <Field label="Hausnummer" name="hausnummer" component={this.renderInput} validate={[required]} />
              </div>
            </div>
            <div className="flex-container">
              <div style={{ width: '50%' }}>
                <Field label="Postleitzahl" name="postleitzahl" component={this.renderInput} validate={[required, mustBeNumber, mustbe5long]} />
              </div>
              <div style={{ width: '50%' }}>
                <Field label="Stadt" name="stadt" component={this.renderInput} validate={[required]} />
              </div>
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

export default reduxForm({
  form: 'address'
})(AddressCheck);