import React, { FunctionComponent } from 'react';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { renderInput, renderSelect, Option } from '../../../../util/renderField';
import { isDate, isEmail, isPhonenumber, pastDate, required } from '../../../../util/ValidationRules';
import { NavigationButton } from '../../../global-components/NavigationButton';
import { PrimaryButton } from '../../../global-components/PrimaryButton';

interface Values {
  anrede: string;
  titel: string;
  vorname: string;
  nachname: string;
  geburtsdatum: string;
  telefonnummer: string;
  email: string;
  password: string;
  passwordRepeated: string;
}

interface OwnProps {
  onSubmit: () => void;
}

type Props = InjectedFormProps<Values, OwnProps> & OwnProps;

const anreden: Option[] = [
  { value: 'HERR', displayed: 'Herr' },
  { value: 'FRAU', displayed: 'Frau' },
  { value: 'DIVERS', displayed: 'Divers' }
]

const titles: Option[] = [
  { value: 'DR', displayed: 'Dr.' },
  { value: 'PROF', displayed: 'Prof.' },
  { value: 'PROF_DR', displayed: 'Prof. Dr.' }
]

const validate = (values: Values): FormErrors => {
  const errors: FormErrors<Values, string> = {};

  if (values.password !== values.passwordRepeated) {
    errors.password = 'Passwörter stimmen nicht überein';
    errors.passwordRepeated = 'Passwörter stimmen nicht überein';
  }

  return errors;
};


const _PersoenlicheDaten: FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <h2>PERSÖNLICHE ANGABEN</h2>
      <p>Damit wir Ihren Vertrag aufsetzen können, benötigen wir einige Informationen von Ihnen. Im darauffolgenden Schritt können Sie Ihre Angaben noch einmal überprüfen.</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="anrede" label="Anrede" component={renderSelect} options={anreden} validate={[required]} />
        <Field name="titel" label="Titel" component={renderSelect} options={titles} />
        <Field name="vorname" label="Vorname" component={renderInput} validate={[required]} />
        <Field name="nachname" label="Nachname" component={renderInput} validate={[required]} />  
        <Field name="geburtsdatum" hintText="TT.MM.JJJJ" label="Geburtsdatum" component={renderInput} validate={[required, isDate, pastDate]} />
        <Field name="telefonnummer" label="Telefonnummer" component={renderInput} validate={[required, isPhonenumber]} />
        <Field name="email" label="Email-Adresse" component={renderInput} validate={[required, isEmail]} />
        <Field name="password" type="password" label="Passwort" component={renderInput} validate={[required]} />
        <Field name="passwordRepeated" type="password" label="Passwort erneut eingeben" component={renderInput} validate={[required]} />
        <div className="btns">
          <NavigationButton to="/register/ihr-tarif" disabled={false} content="ZURÜCK" showSpinner={false} />
          <PrimaryButton disabled={ props.pristine || props.submitting } content="WEITER" />
        </div>
      </form>
    </div>
  );
}

export const PersoenlicheDaten = reduxForm<Values, OwnProps>({
  form: 'vertragsdaten',
  validate: validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(_PersoenlicheDaten);