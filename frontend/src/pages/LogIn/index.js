import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import * as Yup from 'yup';

import { logInRequest } from '~/store/modules/auth/actions';

import { LoginContainer, GithubLoginButton } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LogIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(logInRequest(email, password));
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

      <LoginContainer>
        <h2>Log_in</h2>

        <GithubLoginButton to="/">
          <FaGithub size={22} color="#FFF" /> With <strong>Github</strong>
        </GithubLoginButton>

        <Form schema={schemaValidation} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />

          <SubmitButton>Log in</SubmitButton>
        </Form>

        <div>
          <Link to="/forgotPassword">Forgot your password?</Link>
        </div>
        <div>
          Are you new here? <Link to="/">Create an account</Link>
        </div>
      </LoginContainer>
    </>
  );
}
