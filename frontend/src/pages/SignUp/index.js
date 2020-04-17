import React, { useState } from 'react';

import {
  Container,
  TextualContent,
  SignUpContainer,
  Form,
  SubmitButton,
} from './styles';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [techs, setTechs] = useState('');

  return (
    <Container>
      <TextualContent>
        <h1>Built to connect the true artisans of technology</h1>

        <p>
          Join this community to meet programming and technology enthusiasts
          around you and take the opportunity to share knowledge.
        </p>
      </TextualContent>

      <SignUpContainer>
        <h2>Sign_up</h2>

        <Form onSubmit={() => {}}>
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
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <input
            placeholder="techs"
            value={techs}
            onChange={(event) => setTechs(event.target.value)}
          />

          <SubmitButton>Save</SubmitButton>
        </Form>
      </SignUpContainer>
    </Container>
  );
}
