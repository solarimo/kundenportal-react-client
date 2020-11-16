import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Field, getFormValues, InjectedFormProps, reduxForm } from 'redux-form';
import { Address, addressToString } from '../../../../../domain/Address';
import { Vertragsdaten } from '../../../../../domain/Vertragsdaten';
import { StoreState } from '../../../../../reducers';
import { renderCheckbox } from '../../../../util/renderField';
import { CalculationView } from '../CalculationView';

interface OwnProps {
  address: Address;
  monatlAbschlag: number;
  stromverbrauch: number;
  vertragsdaten: Vertragsdaten;
}

type Props = InjectedFormProps<{}, OwnProps> & OwnProps;


class _Uebersicht extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  sepaConsentText = 'Ich ermächtige die Solarimo GmbH, Zahlungen von meinem Konto mittels SEPA-Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von der Solarimo GmbH auf mein Konto gezogenen SEPA-Lastschriften einzulösen.';


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
          <p><strong>Kontoinhaber: </strong>{this.props.vertragsdaten.kontoinhaber}</p>
          <p><strong>IBAN: </strong>{this.props.vertragsdaten.iban}</p>
          <p><strong>Anrede: </strong>{this.props.vertragsdaten.bic}</p>
          <h1>ZÄHLERDATEN</h1>
          <p><strong>Bisheriger Anbieter: </strong>{this.props.vertragsdaten.bisherigerAnbieter || '-'}</p>
          <p><strong>Zählernummer: </strong>{this.props.vertragsdaten.zaehlernummer || '-'}</p>
          <p><strong>Vertragslaufzeit bis: </strong>{this.props.vertragsdaten.vertragslaufzeitBis || '-' }</p>
          <p><strong>Einzugsdatum: </strong>{this.props.vertragsdaten.einzugsdatum || '-'}</p>
          <h1>KUNDENWERBUNG & RABATT</h1>
          <p><strong>Rabattcode: </strong>{this.props.vertragsdaten.rabattCode || '-'}</p>
          <p><strong>Empfholen von: </strong>{this.props.vertragsdaten.empfehlung || '-'}</p>
          <form>
            <Field name="sepa" label={this.sepaConsentText} component={renderCheckbox} />
            <Field name="agb" label="Ich habe die AGB und Widerrufsbestimmungen gelesen und akzeptiert." component={renderCheckbox} />
            <Field name="datenschutz" label="Ich habe die Datenschutzbestimmungen zur Kenntnis genommen." component={renderCheckbox} />
            <Field name="moechteWerbung" label="Ich möchte über die neuesten Angebote, Rabatt-Aktionen und Veranstaltungen von SOLARME informiert werden." component={renderCheckbox} />
          </form>
        </div>

        <CalculationView />
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

const ConnectedUebersicht = connect(mapStateToProps, null)(_Uebersicht);

export const Uebersicht = reduxForm<{}, OwnProps>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ConnectedUebersicht);


