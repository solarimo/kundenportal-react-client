import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderInput } from '../../../../util/renderField';
import { PrimaryButton } from '../../../global-components/PrimaryButton';

interface OwnProps {
  onBack: () => void;
  onSubmit: () => void;
}

interface Values {
  rabattCode: string;
  empfehlung: string;
}

type Props = InjectedFormProps<Values, OwnProps> & OwnProps;

const _Optional: FunctionComponent<Props> = (props: Props) => {



  return (
    <div>
      <h2>RABATT & EMPFEHLUNG</h2>
      <p>Haben Sie einen Rabatt-Code erhalten oder hat Ihnen ein Freund SOLARME emphohlen? Prima! Dann tragen Sie hier das Passende ein und wir ziehen den Betrag von Ihrer Jahresrechnung ab.</p>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field label="Rabatt Code" name="rabattCode" component={renderInput} />
        <Field label="Empfehlung" name="empfehlung" component={renderInput} />
        <div className="btns">
          <PrimaryButton onClick={props.onBack} content="ZURÜCK" type="button" />
          <PrimaryButton id="optional-to-overview" onClick={props.onSubmit} content="WEITER" />
        </div>
      </form>
    </div>
  );
};

export const Optional = reduxForm<Values, OwnProps>({
  form: 'vertragsdaten',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(_Optional);