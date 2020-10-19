import React, { FormEvent, FunctionComponent, useState, Fragment } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderInput, renderSelect, Option } from '../../../../util/renderField';
import { futureDate, isDate, required } from '../../../../util/ValidationRules';
import { PrimaryButton } from '../../../global-components/PrimaryButton';

interface Values {
  type: string
}

enum Type {
  ANBIETERWECHSEL, NEUEINZUG, NOT_SELECTED
}

type TypeType = 'ANBIETERWECHSEL' | 'NEUEINZUG'

interface State {
  type: Type;
  zaehlernummer?: string;
  bisherigerAnbieter?: string;
  bereitsGekuendigt?: string;
  vertragslaufzeitBis?: string;
  einzugsdatum?: string;
}


type Props = InjectedFormProps<Values, {}>;

const types: Option[] = [
  { value: 'ANBIETERWECHSEL', displayed: 'Anbieterwechsel' },
  { value: 'NEUEINZUG', displayed: 'Neueinzug' }
]

const kuendigung: Option[] = [
  { value: 'BEREITS_GEKUENDIGT', displayed: 'Bereits gekündigt' },
  { value: 'KUENDIGUNG_UEBERNEHMEN', displayed: 'Bitte übernehmen Sie die Kündigung' }
];



const _ZaehlerDaten: FunctionComponent<Props> = (props: Props) => {
  const [type, setType] = useState(Type.NOT_SELECTED);

  const onChange = (e: FormEvent<HTMLSelectElement>) => {
    const type: TypeType = e.currentTarget.value as TypeType;
    setType(Type[type]);
  }

  const renderTypeDependent = () => {
    switch (type) {
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
            <Field name="einzugsdatum" label="Einzugsdatum" hintText="TT.MM.YYYY" component={renderInput} validate={[required, isDate, futureDate]}/>
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
      <form onSubmit={props.handleSubmit(() => {console.log('submitted');
      })}>
        <Field onChange={onChange} name="type" label="Anbieterwechsel oder Neueinzug?" component={renderSelect} options={types} validate={[required]} />
        {renderTypeDependent()}
        <div className="btn">
          <PrimaryButton content="WEITER" disabled={false} showSpinner={false} />
        </div>
      </form>
    </div>
  );
}



export const ZaehlerDaten = reduxForm<Values>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(_ZaehlerDaten);


