import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Select from '~/styles/components/TechSelect';

import { SignUpContainer } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';

import { TechsObject } from '~/pages/utils/TechsObject';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characteres')
    .required('Password is required'),
  techs: Yup.array()
    .max(5, 'Choose a maximum of 5 techs')
    .required('Techs is required')
    .nullable(),
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
          <Select
            name="techs"
            noOptionsMessage={() => 'Tech not found'}
            placeholder="Type a tech and press enter..."
            options={TechsObject}
            isMulti
          />

          <SubmitButton>Create Account</SubmitButton>
        </Form>
      </SignUpContainer>
    </>
  );
}
