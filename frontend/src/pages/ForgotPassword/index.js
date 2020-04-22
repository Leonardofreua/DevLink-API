import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

export default function ForgotPassword() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Forgotten your password?</h2>

        <Form onSumbit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />

          <SubmitButton>Send me reset password email</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}
