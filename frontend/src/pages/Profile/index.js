import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  Content,
  TitleForm,
  TechsSelect,
  UpdateButton,
} from './styles';

import { TechsObject } from '~/pages/utils/TechsObject';

export default function Profile() {
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

  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Content>
          <TitleForm>Your personal information</TitleForm>

          <Input name="name" placeholder="Your name" />
          <Input name="bio" multiline placeholder="Bio" />
          <Input name="email" type="email" placeholder="Your email" />
          <TechsSelect
            name="techs"
            components={components}
            noOptionsMessage={() => 'Tech not found'}
            placeholder="Type a tech and press enter..."
            options={TechsObject}
            styles={selectStyle}
            isClearable={false}
            isMulti
          />

          <hr />

          <Input
            name="oldPassword"
            type="password"
            placeholder="Old Password"
          />
          <Input name="password" type="password" placeholder="New Password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <TitleForm>Where else are you online?</TitleForm>

          <Input name="github_url" placeholder="Github profile" />
          <Input name="linkedin_url" placeholder="Linkedin profile" />
          <Input name="youtube_url" placeholder="Youtube channel link" />
          <Input name="medium_url" placeholder="Medium link" />
          <Input name="twitter_url" placeholder="Twitter profile link" />
          <Input name="website_url" placeholder="Website link" />
        </Content>
        <UpdateButton>Update Profile</UpdateButton>
      </Form>
    </Container>
  );
}
