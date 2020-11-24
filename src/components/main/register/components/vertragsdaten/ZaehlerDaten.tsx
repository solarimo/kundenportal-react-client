import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { renderInput, renderSelect, Option } from '../../../../util/renderField';
import { futureDate, isDate, required } from '../../../../util/ValidationRules';
import { PrimaryButton } from '../../../global-components/PrimaryButton';



enum Type {
  ANBIETERWECHSEL = 'ANBIETERWECHSEL', NEUEINZUG='NEUEINZUG'
}

interface Values {
  type: Type;
  zaehlernummer?: string;
  bisherigerAnbieter?: string;
  bereitsGekuendigt?: string;
  vertragslaufzeitBis?: string;
  einzugsDatum?: string;
}

interface OwnProps {
  onBack: () => void;
  onSubmit: () => void;
  type?: Type;
}


type Props = InjectedFormProps<Values, OwnProps> & OwnProps;

const types: Option[] = [
  { value: 'ANBIETERWECHSEL', displayed: 'Anbieterwechsel' },
  { value: 'NEUEINZUG', displayed: 'Neueinzug' }
]

const kuendigung: Option[] = [
  { value: 'BEREITS_GEKUENDIGT', displayed: 'Bereits gekündigt' },
  { value: 'KUENDIGUNG_UEBERNEHMEN', displayed: 'Bitte übernehmen Sie die Kündigung' }
];



const _ZaehlerDaten: FunctionComponent<Props> = (props: Props) => {

  const renderTypeDependent = () => {
    switch (props.type) {
      case Type.ANBIETERWECHSEL:
        return (
          <Fragment>
            <Field name="zaehlernummer" label="Zählernummer" component={renderInput} validate={required} />
            <Field name="bisherigerAnbieter" label="Bisheriger Anbieter" component={renderInput} validate={required} />
            <Field name="bereitsGekuendigt" label="Kündigung des vorherigen Anbieters" component={renderSelect} options={kuendigung} validate={[required]} />
            <Field name="vertragslaufzeitBis" label="Vertragslaufzeit bis" hintText="TT.MM.YYYY" component={renderInput} validate={[required, isDate, futureDate]} />
          </Fragment>
        );
      case Type.NEUEINZUG:
        return (
          <Fragment>
            <Field name="zaehlernummer" label="Zählernummer" component={renderInput} />
            <Field name="einzugsDatum" label="einzugsDatum" hintText="TT.MM.YYYY" component={renderInput} validate={[required, isDate, futureDate]}/>
          </Fragment>
        );
      default:
        return;
    }
  }
  
  return (
    <div>
      <h2>ZÄHLERDATEN</h2>
      <p>Geben Sie Ihre Zählernummer und den Zählerstand ein. Gerade nicht zur Hand? Kein Problem. Sie können die Daten auch später unserem Service per E-Mail oder Telefon zukommen lassen.</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="type" label="Anbieterwechsel oder Neueinzug?" component={renderSelect} options={types} validate={[required]} />
        {renderTypeDependent()}
        <div className="btns">
          <PrimaryButton onClick={props.onBack} content="ZURÜCK" type="button" />
          <PrimaryButton content="WEITER" />
        </div>
      </form>
    </div>
  );
}

const selector = formValueSelector('vertragsdaten');

const ConnectedZaehlerdaten = connect(state => { return {type: selector(state, 'type')} }, null)(_ZaehlerDaten);


export const ZaehlerDaten = reduxForm<Values, OwnProps>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ConnectedZaehlerdaten);


