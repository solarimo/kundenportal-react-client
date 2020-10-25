import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Calculation } from "../../../../actions";
import { StoreState } from '../../../../reducers';

interface StateProps {
  calculation: Calculation;
}

class _CalculationView extends React.Component<StateProps & {}> {
  render() {
    return (
      <div className="calc-sm">
        <div className="calc-sm-top">
          <p style={{ fontSize: '20px' }}>IHR MONATLICHER ABSCHLAG:</p>
          <h1><span>{this.props.calculation.monatlAbschlag}</span> ,- €</h1>
        </div>
        <div className="calc-sm-bottom">
          <p>Abnahmemenge: <strong>{this.props.calculation.stromverbrauch} kWh</strong></p>
          <p>Arbeitspreis: <strong>{this.props.calculation.arbeitspreis} Cent/kWh</strong></p>
          <p>Jährliche Ersparnis: <strong>{this.props.calculation.ersparnisPerYear} ,- €</strong></p>
          <p>CO² - Ersparnis pro Jahr: <strong>{this.props.calculation.ersparnisC02Kg} kg</strong></p>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ userRegistration }: StoreState) => {
  return {
    calculation: userRegistration.calculation
  }
}
export const CalculationView = connect(mapStateToProps)(_CalculationView);