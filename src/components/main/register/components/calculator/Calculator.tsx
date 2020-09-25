import React from 'react';
import { Field, InjectedFormProps, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import './Calculator.css';

interface OwnProps{
  change: any
}

type CalculatorProps = OwnProps & InjectedFormProps

const renderIconInput = ({ input, id }: any) => {
  const numOfPersons = parseInt(input.value[1]);
  
  return (
    <div>
      <label className={numOfPersons >= parseInt(id[1]) ? 'active-person-label' : ''}  htmlFor={id}>
        <img src={'/icon_person.png'} alt="person-img" width="70" />
      </label>
      <input {...input} type="radio" id={id} value={id} name="person-amount" />
    </div>
  )
}

const onSubmit = () => {

}

const onChange = (change: any) => {
  change('register', 'stromverbrauch', 'hshdfksdf')
}

const Calculator = (props: CalculatorProps) => {

    return (
      <div className="calc">
        <form onChange={() => onChange(props.change)} onSubmit={props.handleSubmit(onSubmit)}>
          <div className="calc-top">
            <div>
              <p className="mb-0">Personsen im Haushalt</p>
              <div className="flex-container">
                <Field name="personen" id="p1" component={renderIconInput} />
                <Field name="personen" id="p2" component={renderIconInput} />
                <Field name="personen" id="p3" component={renderIconInput} />
                <Field name="personen" id="p4" component={renderIconInput} />
                <Field name="personen" id="p5" component={renderIconInput} />
              </div>
            </div>
            <div>
              <p>oder Stromverbrauch (kWh/Jahr)</p>
              <Field name="stromverbrauch" component="input" />
            </div>
          </div>
          <div className="calc-bottom">
          </div>
        </form>
      </div>
    )
}

export default reduxForm({
  form: 'register'
})(connect(null, { change })(Calculator));