import React from 'react';
import { Field, InjectedFormProps, reduxForm, change, FieldArrayMetaProps, FormProps } from 'redux-form';

import { PrimaryButton } from '../../global-components/PrimaryButton';

interface Address {
  strasse: string,
  hausnummer: number,
  postleitzahl: number,
  stadt: string
}


interface AddressCheckState {
  searchValue: string
  address: Address
}

class AddressCheck extends React.Component<InjectedFormProps, AddressCheckState> {
  
  private autocomplete: google.maps.places.Autocomplete | null = null;

  constructor(props: InjectedFormProps) {
    super(props);
    console.log(this.props);
    
  }

  componentDidMount() {
    const input: HTMLInputElement = document.getElementById('address-input') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.getAddress);
  }

  getAddress = () => {
    const response: google.maps.places.PlaceResult = this.autocomplete!.getPlace();
    this.props.change('strasse', response.address_components![1].long_name);
    this.props.change('hausnummer', response.address_components![0].long_name);
    this.props.change('postleitzahl', response.address_components![3].long_name);
    this.props.change('stadt', response.address_components![7].long_name);
  }

  renderInput(formProps: any) {
    return (
        <input {...formProps.input} type="text" />
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
                <label>Straße</label>
                <Field name="strasse" component={this.renderInput} />
              </div>
              <div style={{ width: '25%' }}>
                <label>Hausnummer</label>
                <Field name="hausnummer" component={this.renderInput} />
              </div>
            </div>
            <div className="flex-container">
              <div style={{ width: '50%' }}>
                <label>Postleitzahl</label>
                <Field name="postleitzahl" component={this.renderInput} />
              </div>
              <div style={{ width: '50%' }}>
                <label htmlFor="stadt">Stadt</label>
                <Field name="stadt" component={this.renderInput} />
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