import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/dev/actions';

import {
  Container,
  Content,
  TitleForm,
  TechsSelect,
  UpdateButton,
} from './styles';

import { TechsObject } from '~/pages/utils/TechsObject';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.dev.profile);

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

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Content>
          <TitleForm>Your personal information</TitleForm>

          <Input name="name" placeholder="Your name" />
          <Input name="bio" multiline maxLength="160" placeholder="Bio" />
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

          <Input name="socialMedia.github_url" placeholder="Github profile" />
          <Input
            name="socialMedia.linkedin_url"
            placeholder="Linkedin profile"
          />
          <Input
            name="socialMedia.youtube_url"
            placeholder="Youtube channel link"
          />
          <Input name="socialMedia.medium_url" placeholder="Medium link" />
          <Input
            name="socialMedia.twitter_url"
            placeholder="Twitter profile link"
          />
          <Input name="socialMedia.website_url" placeholder="Website link" />
        </Content>
        <UpdateButton>Update Profile</UpdateButton>
      </Form>
    </Container>
  );
}
