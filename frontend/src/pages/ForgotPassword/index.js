import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function ForgotPassword() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Forgotten your password?</h2>

        <Form schema={schemaValidation} onSumbit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />

          <SubmitButton>Send me reset password email</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}
