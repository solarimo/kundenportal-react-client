import React, { MouseEvent } from 'react';

import './Calculator.css';

export class Calculator extends React.Component {

  activePersonLabel = { opacity: 1 };

  setStromverbrauch = (e: MouseEvent ) => {
  }

  onChange = () => {
    console.log('change');
    
  }

  renderRadioBoxes(): JSX.Element[] {
    const boxes = [1, 2, 3, 4, 5];

    return boxes.map(index => {
      return (
        <div key={index} >
          <label onClick={this.setStromverbrauch} htmlFor={'p' + index}>
            <img src="https://mysolarme.de/wp-content/uploads/icon_person.png" alt="person-img" width="70"/>
          </label>
          <input onClick={this.setStromverbrauch} type="radio" id={'p' + index} name="person-amount" />
        </div>
      )
    });
  }

  render() {
    return (
      <div className="calc">
        <form onChange={this.onChange}>
          <div className="calc-top">
            <div>
              <p>Personsen im Haushalt</p>
                <div className="flex-container">
                  {this.renderRadioBoxes()}
                </div>
            </div>
            <div>
              <p>oder Stromverbrauch (kWh/Jahr)</p>
              <input type="text"/>
            </div>
          </div>
          <div className="calc-bottom">

          </div>
        </form>
      </div>
    )
  }
}