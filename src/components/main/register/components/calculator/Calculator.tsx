import React, { MouseEvent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import './Calculator.css';

class Calculator extends React.Component<InjectedFormProps> {

  onChange() {
    console.log('changed');

  }

  renderIconInput = ({ input, id }: any) => {
    return (
      <div>
        <label htmlFor={id}>
          <img src={'/icon_person.png'} alt="person-img" width="70" />
        </label>
        <input {...input} type="radio" id={id} value={id} name="person-amount" />
      </div>
    )
  }

  render() {
    return (
      <div className="calc">
        <form onChange={this.onChange}>
          <div className="calc-top">
            <div>
              <p>Personsen im Haushalt</p>
              <div className="flex-container">
                <Field name="personen" id="p1" component={this.renderIconInput} />
                <Field name="personen" id="p2" component={this.renderIconInput} />
                <Field name="personen" id="p3" component={this.renderIconInput} />
                <Field name="personen" id="p4" component={this.renderIconInput} />
                <Field name="personen" id="p5" component={this.renderIconInput} />
              </div>
            </div>
            <div>
              <p>oder Stromverbrauch (kWh/Jahr)</p>
              <input type="text" />
            </div>
          </div>
          <div className="calc-bottom">

          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'register'
})(Calculator)