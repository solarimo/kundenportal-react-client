import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { PrimaryButton } from '../../../global-components/PrimaryButton';
import { required, mustBeNumber, mustbe5long } from '../../../../util/ValidationRules';
import './AddressCheck.css'
import { connect } from 'react-redux';
import { StoreState } from '../../../../../reducers';
import { setAddress, Address } from '../../../../../actions';
import backend from '../../../../../api/backend';
import { CustomSnackbar } from '../../../global-components/CustomSnackbar';
import { renderInput } from '../../../../util/renderField';


class GoogleResponseAddress {
  street_number: string = '';
  postal_code: string = '';
  locality: string = '';
  route: string = '';
}

interface BackendResponse {
  addressId: string | null;
}

interface IFormProps {
  strasse: string;
  hausnummer: string;
  postleitzahl: string;
  stadt: string;
}

interface AddressCheckState {
  fetching: boolean;
  showErrorSnackBar: boolean;
}

interface OwnProps {
  setAddress: (address: Address) => void;
  address: Address
  history: any
}

type AddressCheckProps = InjectedFormProps<IFormProps, OwnProps> & OwnProps;


class _AddressCheck extends React.Component<AddressCheckProps, AddressCheckState> {

  constructor(props: AddressCheckProps) {
    super(props);

    this.state = { fetching: false, showErrorSnackBar: false };
  }

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
    this.props.change('postleitzahl', responseAddress.postal_code);
    this.props.change('stadt', responseAddress.locality);
  }

  onSubmit = async ({ strasse, hausnummer, postleitzahl, stadt }: IFormProps) => {
    this.setState({ fetching: true });
    const { data } = await backend.post<BackendResponse>('/register/validate-address', {
      'strasse': strasse,
      'hausnummer': hausnummer,
      'postleitzahl': postleitzahl,
      'stadt': stadt
    });
    this.setState({ fetching: false });

    if (!data.addressId) {
      this.setState({ showErrorSnackBar: true })
      return;
    }
    
    this.props.setAddress({
      strasse,
      hausnummer,
      postleitzahl,
      stadt,
      addressId: data.addressId
    });

    this.props.history.push('/register/ihr-tarif');
    
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
                <Field label="Straße" name="strasse" component={renderInput} validate={[required]}  />
              </div>
              <div style={{ width: '25%' }}>
                <Field label="Hausnummer" name="hausnummer" component={renderInput} validate={[required]} />
              </div>
            </div>
            <div className="flex-container">
              <div style={{ width: '50%' }}>
                <Field label="Postleitzahl" name="postleitzahl" component={renderInput} validate={[required, mustBeNumber, mustbe5long]} />
              </div>
              <div style={{ width: '50%' }}>
                <Field label="Stadt" name="stadt" component={renderInput} validate={[required]} />
              </div>
            </div>
            <div className="flex-btn">
              <PrimaryButton disabled={ this.props.pristine || this.props.submitting } content="Zu Ihrem Tarif" showSpinner={this.state.fetching} />
            </div>
          </div>

        </form>
        <CustomSnackbar show={this.state.showErrorSnackBar} onClose={() => this.setState({ showErrorSnackBar: false })} />
      </div>
    );
  }
}
const mapStateToProps = ({ userRegistration }: StoreState) => {
  return { address: userRegistration.address };
}

const AddressCheck = connect(mapStateToProps, { setAddress })(_AddressCheck);

export default reduxForm<IFormProps, AddressCheckProps>({
  form: 'address'
})(AddressCheck);