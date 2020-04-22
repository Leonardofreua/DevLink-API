import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { SignUpContainer } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characteres')
    .required('Password is required'),
  techs: Yup.string().required('Techs is required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <TextualContent>
        <h1>Built to connect the true artisans of technology</h1>

        <p>
          Join this community to meet programming and technology enthusiasts
          around you and take the opportunity to share knowledge.
        </p>
      </TextualContent>

      <SignUpContainer>
        <h2>Sign_up</h2>

        <Form schema={schemaValidation} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Name" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="password" />
          <Input name="techs" placeholder="techs" />

          <SubmitButton>Create Account</SubmitButton>
        </Form>
      </SignUpContainer>
    </>
  );
}
