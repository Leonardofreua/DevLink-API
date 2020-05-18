import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Spinner } from 'react-bootstrap';
import * as Yup from 'yup';

import { SignUpContainer } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';
import Select from '~/components/TechSelect';

import { TechsObject } from '~/utils/TechsObject';

import { signUpRequest } from '~/store/modules/auth/actions';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characteres')
    .required('Password is required'),
  techs: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      })
    )
    .max(5, 'Choose a maximum of 5 techs')
    .required('Techs is required')
    .nullable(),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const selectStyle = {
    control: (_, state) => ({
      // none of react-select's styles are passed to <Control />
      border: '1px solid #dcdce6',
      borderRadius: '7px',
      boxShadow: state.isFocused ? 0 : 0,
    }),
  };

  const components = {
    DropdownIndicator: null,
  };

  function handleSubmit({ name, email, password, techs }) {
    dispatch(signUpRequest(name, email, password, techs));
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
            components={components}
            noOptionsMessage={() => 'Tech not found'}
            placeholder="Type a tech and press enter..."
            options={TechsObject}
            styles={selectStyle}
            isClearable={false}
            isMulti
          />

          <SubmitButton disabled={loading ? 1 : 0}>
            {loading ? (
              <Spinner
                as="span"
                variant="light"
                animation="grow"
                role="status"
                aria-hidden="true"
              />
            ) : (
              'Create Account'
            )}
          </SubmitButton>
        </Form>
      </SignUpContainer>
    </>
  );
}
