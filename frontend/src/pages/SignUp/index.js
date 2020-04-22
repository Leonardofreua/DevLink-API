import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { SignUpContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <span>
        <h1>Built to connect the true artisans of technology</h1>

        <p>
          Join this community to meet programming and technology enthusiasts
          around you and take the opportunity to share knowledge.
        </p>
      </span>

      <SignUpContainer>
        <h2>Sign_up</h2>

        <Form onSubmit={handleSubmit}>
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
