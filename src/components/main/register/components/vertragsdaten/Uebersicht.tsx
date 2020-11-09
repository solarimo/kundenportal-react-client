import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form';
import { Address } from '../../../../../domain/Address';
import { Vertragsdaten } from '../../../../../domain/Vertragsdaten';
import { StoreState } from '../../../../../reducers';
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


  render() {
    console.log(this.props.vertragsdaten);

    return (
      <div className="form-calc-grid">
        <div className="input-fragment">
          <p>Wir haben diese Angaben von Ihnen erhalten. Ist alles korrekt? Wenn nicht, gehen Sie noch mal einen Schritt zurück.</p>
          <h1>PERSÖNLICHE DATEN</h1>
          <p><strong>Anrede: </strong>{this.props.vertragsdaten.anrede}</p>
          <p><strong>Vorname: </strong>{this.props.vertragsdaten.vorname}</p>
          <p><strong>Nachname: </strong>{this.props.vertragsdaten.nachname}</p>
          <p><strong>Adresse: </strong>{this.props.address.toString()}</p>
          <h1>KONTOVERBINDUNG</h1>
          <h1>ZÄHLERDATEN</h1>
          <h1>KUNDENWERBUNG & RABATT</h1>
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


