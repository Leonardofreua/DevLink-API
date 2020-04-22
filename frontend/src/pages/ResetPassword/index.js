import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

const schemaValidation = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characteres')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must match'
  ),
});

export default function ForgotPassword() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Reset Password</h2>

        <Form schema={schemaValidation} onSubmit={handleSubmit}>
          <Input name="password" type="password" placeholder="New password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <SubmitButton>Reset Password</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}
