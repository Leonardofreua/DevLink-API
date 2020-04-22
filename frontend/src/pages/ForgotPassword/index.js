import React, { useState } from 'react';

import { ForgotPassowrdContainer, Form } from './styles';
import { SubmitButton } from '~/styles/components/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Forgotten your password?</h2>

        <Form onSubmit={() => {}}>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <SubmitButton>Send me reset password email</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}
