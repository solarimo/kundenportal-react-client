import React from 'react';
import { connect } from 'react-redux';
import { Field, getFormValues, InjectedFormProps, reduxForm } from 'redux-form';
import { Address, addressToString } from '../../../../../domain/Address';
import { Vertragsdaten } from '../../../../../domain/Vertragsdaten';
import { StoreState } from '../../../../../reducers';
import { renderCheckbox } from '../../../../util/renderField';
import { NavigationButton } from '../../../global-components/NavigationButton';
import { PrimaryButton } from '../../../global-components/PrimaryButton';
import { CalculationView } from '../CalculationView';
import { registerUser, DomainUserData } from '../../../../../actions';

interface OwnProps {
  address: Address;
  monatlAbschlag: number;
  stromverbrauch: number;
  vertragsdaten: Vertragsdaten;
  registerUser: (data: DomainUserData) => void;
}

interface State {
  fetching: boolean;
}

type Props = InjectedFormProps<{}, OwnProps> & OwnProps;


class _Uebersicht extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { fetching: false };
  }

  sepaConsentText = 'Ich ermächtige die Solarimo GmbH, Zahlungen von meinem Konto mittels SEPA-Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von der Solarimo GmbH auf mein Konto gezogenen SEPA-Lastschriften einzulösen.';

  onSubmit = () => {
    this.props.registerUser({ 
      vertragsdaten: this.props.vertragsdaten,
      address: this.props.address,
      monatlAbschlag: this.props.monatlAbschlag,
      stromverbrauch: this.props.stromverbrauch
     });
    
  }


  render() {

    return (
      <div className="form-calc-grid">
        <div className="input-fragment">
          <p>Wir haben diese Angaben von Ihnen erhalten. Ist alles korrekt? Wenn nicht, gehen Sie noch mal einen Schritt zurück.</p>
          <h1>PERSÖNLICHE DATEN</h1>
          <p><strong>Anrede: </strong>{this.props.vertragsdaten.anrede}</p>
          <p><strong>Titel: </strong>{this.props.vertragsdaten.titel || '-'}</p>
          <p><strong>Vorname: </strong>{this.props.vertragsdaten.vorname}</p>
          <p><strong>Nachname: </strong>{this.props.vertragsdaten.nachname}</p>
          <p><strong>Adresse: </strong>{addressToString(this.props.address)}</p>
          <p><strong>Telefon: </strong>{this.props.vertragsdaten.telefonnummer}</p>
          <p><strong>E-Mail: </strong>{this.props.vertragsdaten.email}</p>
          <h1>KONTOVERBINDUNG</h1>
          <p><strong>Konto: </strong>{this.props.vertragsdaten.kontoinhaber}</p>
          <p><strong>IBAN: </strong>{this.props.vertragsdaten.iban}</p>
          <p><strong>Anrede: </strong>{this.props.vertragsdaten.bic}</p>
          <h1>ZÄHLERDATEN</h1>
          <p><strong>Bisheriger Anbieter: </strong>{this.props.vertragsdaten.bisherigerAnbieter || '-'}</p>
          <p><strong>Zählernummer: </strong>{this.props.vertragsdaten.zaehlernummer || '-'}</p>
          <p><strong>Vertragslaufzeit bis: </strong>{this.props.vertragsdaten.vertragslaufzeitBis || '-' }</p>
          <p><strong>einzugsDatum: </strong>{this.props.vertragsdaten.einzugsDatum || '-'}</p>
          <h1>KUNDENWERBUNG & RABATT</h1>
          <p><strong>Rabattcode: </strong>{this.props.vertragsdaten.rabattCode || '-'}</p>
          <p><strong>Empfholen von: </strong>{this.props.vertragsdaten.empfehlung || '-'}</p>
        </div>
        <CalculationView />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="consent-form">
            <Field name="sepa" label={this.sepaConsentText} component={renderCheckbox} />
            <Field name="agb" label="Ich habe die AGB und Widerrufsbestimmungen gelesen und akzeptiert." component={renderCheckbox} />
            <Field name="datenschutz" label="Ich habe die Datenschutzbestimmungen zur Kenntnis genommen." component={renderCheckbox} />
            <Field name="moechteWerbung" label="Ich möchte über die neuesten Angebote, Rabatt-Aktionen und Veranstaltungen von SOLARME informiert werden." component={renderCheckbox} />
            <div className="btns">
              <NavigationButton to="/register/vertragsdaten" disabled={false} content="ZURÜCK" showSpinner={false} />
              <PrimaryButton disabled={this.state.fetching} showSpinner={this.state.fetching} content="JETZT ZAHLUNGSPFLICHTIG BESTELLEN" />
            </div>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    address: state.userRegistration.address,
    stromverbrauch: state.userRegistration.calculation.stromverbrauch,
    monatlAbschlag: state.userRegistration.calculation.monatlAbschlag,
    vertragsdaten: getFormValues('vertragsdaten')(state)
  }
}

//@ts-ignore
const ConnectedUebersicht = connect(mapStateToProps, { registerUser })(_Uebersicht);

export const Uebersicht = reduxForm<{}, OwnProps>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ConnectedUebersicht);


