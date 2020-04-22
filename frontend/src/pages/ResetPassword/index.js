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
        <h2>Reset Password</h2>

        <Form onSubmit={handleSubmit}>
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
