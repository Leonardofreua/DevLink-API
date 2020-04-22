import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import { LoginContainer, GithubLoginButton, Form } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        <Form onSubmit={() => {}}>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <SubmitButton>Log in</SubmitButton>
        </Form>

        <div>
          <Link to="/forgotPassowrd">Forgot your password?</Link>
        </div>
        <div>
          Are you new here? <Link to="/">Create an account</Link>
        </div>
      </LoginContainer>
    </>
  );
}
