import React, { ChangeEvent } from 'react';
import { PrimaryButton } from '../../global-components/PrimaryButton';

interface Address {
  strasse?: string,
  hausnummer?: number | undefined,
  postleitzahl?: number | undefined,
  stadt?: string
}

interface AddressCheckState {
  searchValue: string
  address: Address
}

export class AddressCheck extends React.Component<{}, AddressCheckState> {
  
  private autocomplete: google.maps.places.Autocomplete | null = null;

  constructor(props: {}) {
    super(props);

    this.state = ({
      searchValue: '',
      address: {
        strasse: '',
        hausnummer: undefined,
        postleitzahl: undefined,
        stadt: ''
      }
    })
  }

  componentDidMount() {
    const input: HTMLInputElement = document.getElementById('address-input') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.getAddress);
  }

  getAddress = () => {
    const response: google.maps.places.PlaceResult = this.autocomplete!.getPlace();
    console.log(response);
    this.setState({
      address: {
        strasse: response.address_components![1].long_name,
        hausnummer: parseInt(response.address_components![0].long_name),
        stadt: response.address_components![3].long_name,
        postleitzahl: parseInt(response.address_components![7].long_name)
      }
    });
    console.log(this.state);

  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ address: {
      [e.target.id]: e.target.value
    } });
  }

  render() {
    return (
      <div className="address-component">
        <h2>Bitte nennen Sie uns Ihre Adresse. Wir prüfen für Sie, ob der Solarstrom vom Dach in Ihrer Wohnung verfügbar ist.</h2>
        <form>
          <div id="address-container">
            <label htmlFor="">Suchen Sie hier nach Ihrer Addresse</label>
            <input id="address-input" type="text" />
            <br />
            <div className="flex-container">
              <div style={{ width: '75%' }}>
                <label htmlFor="strasse">Straße</label>
                <input onChange={this.handleChange} value={this.state.address.strasse} id="strasse" type="text" />
              </div>
              <div style={{ width: '25%' }}>
                <label htmlFor="hausnummer">Hausnummer</label>
                <input value={this.state.address.hausnummer} id="strasse" type="text" />
              </div>
            </div>
            <div className="flex-container">
              <div style={{ width: '50%' }}>
                <label htmlFor="postleitzahl">Postleitzahl</label>
                <input value={this.state.address.postleitzahl} id="postleitzahl" type="text" />
              </div>
              <div style={{ width: '50%' }}>
                <label htmlFor="stadt">Stadt</label>
                <input value={this.state.address.stadt} id="stadt" type="text" />
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