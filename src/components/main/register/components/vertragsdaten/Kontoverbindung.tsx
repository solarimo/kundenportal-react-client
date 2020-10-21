import React, { FormEvent, FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import backend from '../../../../../api/backend';
import { renderInput } from '../../../../util/renderField';
import { required } from '../../../../util/ValidationRules';
import { PrimaryButton } from '../../../global-components/PrimaryButton';

const openIBANUrl = (iban: string) => `https://openiban.com/validate/${iban}?getBIC=true&validateBankCode=true`;

interface OwnProps {
  onBack: () => void;
  onSubmit: () => void;
}


interface Values {
  iban: string;
  bic: string;
  kontoinhaber: string;
}

type Props = InjectedFormProps<Values, OwnProps> & OwnProps;

const _Kontoverbindung: FunctionComponent<Props> = (props: Props) => {

  const onSubmit = (values: Values) => {
    // backend.get(openIBANUrl(values.iban));
  }

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    let currentTarget = e.currentTarget
    let position = currentTarget.selectionEnd;
    let length = currentTarget.value.length;
    currentTarget.value = currentTarget.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    if (position !== null) {
      currentTarget.selectionEnd = position += ((currentTarget.value.charAt(position - 1) === ' ' && currentTarget.value.charAt(length - 1) === ' ' && length !== currentTarget.value.length) ? 1 : 0);
    }
  }
  
  return (
    <div>
      <h2>KONTOVERBINDUNG</h2>
      <p>Tragen Sie hier bitte Ihre Kontodaten für Ihren monatlichen Abschlag ein. Auf das Konto, das Sie hier angeben, überweisen wir Ihnen z.B. auch Ihr Guthaben zurück, wenn Sie weniger Strom verbraucht haben.</p>
      <form onSubmit={props.handleSubmit(onSubmit)} >
        <Field name="kontoinhaber" label="Kontoinhaber" component={renderInput} validate={[required]} />
        <Field onInput={onInput} name="iban" label="IBAN" component={renderInput} validate={[required]} />
        <Field disabled={true} name="bic" label="BIC" component={renderInput} />
        <div className="btns">
          <PrimaryButton onClick={props.onBack} content="ZURÜCK" type="button" />
          <PrimaryButton content="WEITER" />
        </div>
      </form>
    </div>
  );
}

export const Kontoverbindung = reduxForm<Values, OwnProps>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(_Kontoverbindung);