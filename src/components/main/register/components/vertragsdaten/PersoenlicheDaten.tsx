import React, { FunctionComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput, renderSelect, Value } from '../../../../util/renderField';

const anreden: Value[] = [
  { value: 'HERR', displayed: 'Herr' },
  { value: 'FRAU', displayed: 'Frau' },
  { value: 'DIVERS', displayed: 'Divers' }
]

const titles: Value[] = [
  { value: 'DR', displayed: 'Dr.' },
  { value: 'PROF', displayed: 'Prof.' },
  { value: 'PROF_DR', displayed: 'Prof. Dr.' }
]

const _PersoenlicheDaten: FunctionComponent = () => {
  return (
    <div>
      <h2>PERSÖNLICHE ANGABEN</h2>
      <p>Damit wir Ihren Vertrag aufsetzen können, benötigen wir einige Informationen von Ihnen. Im darauffolgenden Schritt können Sie Ihre Angaben noch einmal überprüfen.</p>
      <form action="">
        <Field name="anrede" label="Anrede" component={renderSelect} values={anreden} />
        <Field name="titel" label="Titel" component={renderSelect} values={titles} />
        <Field name="vorname" label="Vorname" component={renderInput} />
        <Field name="nachname" label="Nachname" component={renderInput} />  
        <Field name="geburtsdatum" label="Geburtsdatum" component={renderInput} />
      </form>
    </div>
  );
}

export const PersoenlicheDaten = reduxForm({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(_PersoenlicheDaten);