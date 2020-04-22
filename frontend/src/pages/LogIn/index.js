import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import { LoginContainer, GithubLoginButton } from './styles';
import { SubmitButton } from '~/styles/components/Button';

export default function LogIn() {
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

      <LoginContainer>
        <h2>Log_in</h2>

        <GithubLoginButton to="/">
          <FaGithub size={22} color="#FFF" /> With <strong>Github</strong>
        </GithubLoginButton>

        <Form onSubmit={handleSubmit}>
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
