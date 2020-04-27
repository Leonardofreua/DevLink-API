import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

import { forgotPasswordRequest } from '~/store/modules/auth/actions';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function ForgotPassword() {
  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
  }

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Forgotten your password?</h2>

        <Form schema={schemaValidation} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Your email" />

          <SubmitButton>Send me reset password email</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}
