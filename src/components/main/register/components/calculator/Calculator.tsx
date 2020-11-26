import { CircularProgress } from '@material-ui/core';
import React, { FormEvent, createRef } from 'react';
import { connect } from 'react-redux';
import backend from '../../../../../api/backend';
import { StoreState } from '../../../../../reducers';
import { mustBeNumber } from '../../../../util/ValidationRules';
import { NavigationButton } from '../../../global-components/NavigationButton';
import { Calculation, setCalculation } from '../../../../../actions';

import './Calculator.css';


const labels: { [key: string]: { ref: React.RefObject<HTMLLabelElement>, value: number } } = {
  l1: { ref: createRef<HTMLLabelElement>(), value: 1 },
  l2: { ref: createRef<HTMLLabelElement>(), value: 2 },
  l3: { ref: createRef<HTMLLabelElement>(), value: 3 },
  l4: { ref: createRef<HTMLLabelElement>(), value: 4 },
  l5: { ref: createRef<HTMLLabelElement>(), value: 5 },
}

const input = createRef<HTMLInputElement>();

interface State {
  stromverbrauch: string;
  errorMessage: string;
  values: BackendResponse;
  dataState: DataState;
}

interface OwnProps {
  addressId: string;
  setCalculation: (calc: Calculation) => void;
}

interface BackendResponse {
  stromverbrauch: number;
  monatlAbschlag: number;
  ersparnisPerYear: number;
  ersparnisC02Kg: number;
  grundpreis: number;
  arbeitspreis: number;

}

enum DataState {
  PRISTINE,
  LOADING,
  SHOW
}

const Error = ({ message }: { message: string }) => {
  return <span style={{ color: 'red', fontSize: '10px' }} >{message}</span>;
}


class _Calculator extends React.Component<OwnProps, State> {

  constructor(props: OwnProps) {
    super(props);
    this.state = {
      stromverbrauch: '',
      errorMessage: '',
      values: {
        stromverbrauch: 0,
        monatlAbschlag: 0,
        ersparnisC02Kg: 0,
        ersparnisPerYear: 0,
        grundpreis: 0,
        arbeitspreis: 0
      },
      dataState: DataState.PRISTINE
    }
  }


  setStromverbrauchByPersonen = (e: FormEvent<HTMLInputElement>) => {
    const numOfId = parseInt(e.currentTarget.id[1]);
    for (const label in labels) {
      const current = labels[label].ref.current;
      if (labels[label].value <= numOfId) {

        current!.classList.add('active-person-label');
      } else {
        current!.classList.remove('active-person-label');
      }

    }
    this.setState({ stromverbrauch: e.currentTarget.value, errorMessage: '' });

  }


  onInputChange = (e: FormEvent<HTMLInputElement>) => {


    const error = mustBeNumber(e.currentTarget.value);
    this.setState({ errorMessage: error ? error : '' });
    this.setState({ stromverbrauch: e.currentTarget.value });
  }


  onChange() {
    this.setState((state: State) => state, () => {
      if (!this.state.errorMessage) {
        this.setState({ dataState: DataState.LOADING });
        backend.post<BackendResponse>('/register/calculate', {
          addressId: this.props.addressId,
          stromverbrauch: parseInt(this.state.stromverbrauch)
        })
        .then(({ data }) => {
          this.setState({ values: data, dataState: DataState.SHOW });
          this.props.setCalculation(data as Calculation);
        });
      }
    });
  }

  renderBottom = (): JSX.Element => {
    switch (this.state.dataState) {
      
      
      case DataState.PRISTINE:
        return (
          <div>
            <h3 className="calc-datastate-pristine">Bitte schätzen sie Ihren Stromverbrauch</h3>
          </div>
        );
      case DataState.LOADING:
        return (
          <div className="flex-center">
            <CircularProgress className="calc-datastate-pristine" />
          </div>
        )
      case DataState.SHOW:
        return (
          <div className="calc-bottom">
            <div className="abschlag-box">
              <p>Ihr monatlicher Abschlag: </p>
              <h1><span>{this.state.values.monatlAbschlag}</span>,- €</h1>
            </div>
            <div>
              <h2>ZUSAMMENGESETZT AUS: </h2>
              <p>
                Abnahmemenge: <strong><span>{this.state.values.stromverbrauch}</span> kWh</strong><br />
                Arbeitspreis: <strong><span>{this.state.values.arbeitspreis}</span> Cent/kWh</strong><br />
                Grundpreis: <strong><span>{this.state.values.grundpreis}</span> €/Monat</strong><br />
              </p>
            </div>
            <div>
              <h2>SIE SPAREN: </h2>
              <p>
                Jährliche Ersparnis: * <strong><span>{this.state.values.ersparnisPerYear}</span>,- €</strong><br />
              CO₂ - Ersparnis pro Jahr: <strong><span>{this.state.values.ersparnisC02Kg}</span> kg</strong><br />
              </p>
            </div>
          </div>
        );
    }

  }

  render() {

    return (
      <div>
        <div className="calc">
          <form onChange={this.onChange.bind(this)}>
            <div className="calc-top">
              <div>
                <p className="mb-0">Personsen im Haushalt</p>
                <div className="flex-container">
                  <label ref={labels.l1.ref} htmlFor="p1">
                    <img src={'/icon_person.png'} alt="person-img" className="person-img" />
                  </label>
                  <input onClick={this.setStromverbrauchByPersonen} type="radio" id="p1" value={1500} name="person-amount" />
                  <label ref={labels.l2.ref} htmlFor="p2">
                    <img src={'/icon_person.png'} alt="person-img" className="person-img" />
                  </label>
                  <input onClick={this.setStromverbrauchByPersonen} type="radio" id="p2" value={2500} name="person-amount" />
                  <label ref={labels.l3.ref} htmlFor="p3">
                    <img src={'/icon_person.png'} alt="person-img" className="person-img" />
                  </label>
                  <input onClick={this.setStromverbrauchByPersonen} type="radio" id="p3" value={3500} name="person-amount" />
                  <label ref={labels.l4.ref} htmlFor="p4">
                    <img src={'/icon_person.png'} alt="person-img" className="person-img" />
                  </label>
                  <input onClick={this.setStromverbrauchByPersonen} type="radio" id="p4" value={4250} name="person-amount" />
                  <label ref={labels.l5.ref} htmlFor="p5">
                    <img src={'/icon_person.png'} alt="person-img" className="person-img" />
                  </label>
                  <input onClick={this.setStromverbrauchByPersonen} type="radio" id="p5" value={5000} name="person-amount" />
                </div>
              </div>
              <div>
                <p>oder Stromverbrauch (kWh/Jahr)</p>
                <input ref={input} id="calc-verbrauch" className={this.state.errorMessage ? 'field-error' : ''} value={this.state.stromverbrauch} onChange={this.onInputChange} />
                {this.state.errorMessage && <Error message={this.state.errorMessage} />}
              </div>
            </div>
            <div className="calc-bottom">
            </div>
          </form>
          {this.renderBottom()}
        </div>
        <div className="btns">
          <NavigationButton to="/register/verfuegbarkeit" content="ZURÜCK" />
          <NavigationButton id="calc-to-vertragsdaten" to="/register/vertragsdaten" disabled={!!this.state.errorMessage || !this.state.stromverbrauch} content="WEITER" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ userRegistration }: StoreState) => {
  return { addressId: userRegistration.address.addressId }
}

export const Calculator = connect(mapStateToProps, { setCalculation })(_Calculator);