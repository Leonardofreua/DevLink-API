import React, { useState } from 'react';

import { SignUpContainer } from './styles';
import { TextualContent } from '~/styles/components/TextualContent';
import { SubmitButton } from '~/styles/components/Button';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [techs, setTechs] = useState('');

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

        <form>
          <input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

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

          <input
            placeholder="techs"
            value={techs}
            onChange={(event) => setTechs(event.target.value)}
          />
          <SubmitButton>Create Account</SubmitButton>
        </form>
      </SignUpContainer>
    </>
  );
}
