import React from 'react';
import { Field, InjectedFormProps, reduxForm, change, FieldArrayMetaProps, FormProps } from 'redux-form';

import { PrimaryButton } from '../../global-components/PrimaryButton';

interface Address {
  strasse: string,
  hausnummer: number,
  postleitzahl: number,
  stadt: string
}

class AddressCheck extends React.Component<InjectedFormProps> {
  
  private autocomplete: google.maps.places.Autocomplete | null = null;

  constructor(props: InjectedFormProps) {
    super(props);    
  }

  componentDidMount() {
    const input: HTMLInputElement = document.getElementById('address-input') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setAddressFields);
  }

  setAddressFields = () => {
    const response: google.maps.places.PlaceResult = this.autocomplete!.getPlace();
    this.props.change('strasse', response.address_components![1].long_name);
    this.props.change('hausnummer', response.address_components![0].long_name);
    this.props.change('postleitzahl', response.address_components![3].long_name);
    this.props.change('stadt', response.address_components![7].long_name);
  }

  renderInput(formProps: any) {
    return (
      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input} type="text" />
      </div>
    );
  }

  render() {
    return (
      <div className="address-component">
        <h2>Bitte nennen Sie uns Ihre Adresse. Wir prüfen für Sie, ob der Solarstrom vom Dach in Ihrer Wohnung verfügbar ist.</h2>
        <form>
          <div id="address-container">
            <label htmlFor="">Suchen Sie hier nach Ihrer Addresse</label>
            <input id="address-input" type="text" placeholder=". . ."/>
            <br />
            <div className="flex-container">
              <div style={{ width: '75%' }}>
                <Field label="Straße" name="strasse" component={this.renderInput} />
              </div>
              <div style={{ width: '25%' }}>
                <Field label="Hausnummer" name="hausnummer" component={this.renderInput} />
              </div>
            </div>
            <div className="flex-container">
              <div style={{ width: '50%' }}>
                <Field label="Postleitzahl" name="postleitzahl" component={this.renderInput} />
              </div>
              <div style={{ width: '50%' }}>
                <Field label="Stadt" name="stadt" component={this.renderInput} />
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