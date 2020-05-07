import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/dev/actions';

import AvatarInput from './AvatarInput';

import {
  Container,
  Content,
  TitleForm,
  TechsSelect,
  UpdateButton,
} from './styles';

import { TechsObject } from '~/utils/TechsObject';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  bio: Yup.string().max(160, 'Max 160 characteres.'),

  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'Password must be at least 6 characteres')
          .required('New password is required')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirm password is required')
          .oneOf([Yup.ref('password')])
      : field
  ),
  file: Yup.string(),
  techs: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      })
    )
    .max(5, 'Choose a maximum of 5 techs')
    .nullable(),
  socialMedia: Yup.object().shape({
    github_url: Yup.string(),
    linkedin_url: Yup.string(),
    youtube_url: Yup.string(),
    medium_url: Yup.string(),
    twitter_url: Yup.string(),
    website_url: Yup.string(),
  }),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.dev.profile);

  const [techs, setTechs] = useState([]);

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
    Object.assign(data, { techs });
    dispatch(updateProfileRequest(data));
  }

  useEffect(() => {
    function filterTechs() {
      const filteredTechs = TechsObject.filter((techObject) => {
        return profile.techs.indexOf(techObject.label) >= 0;
      });

      setTechs(filteredTechs);
    }
    filterTechs();
  }, [profile]);

  return (
    <Container>
      <Form
        initialData={profile}
        schema={schemaValidation}
        onSubmit={handleSubmit}
      >
        <AvatarInput name="file" github_avatar={profile.avatar} />
        <Content>
          <TitleForm>Your personal information</TitleForm>

          <Input name="name" maxLength="50" placeholder="Your name" />
          <Input name="bio" multiline maxLength="160" placeholder="Bio" />
          <Input
            name="email"
            maxLength="50"
            type="email"
            placeholder="Your email"
          />
          <TechsSelect
            name="techs"
            components={components}
            noOptionsMessage={() => 'Tech not found'}
            placeholder="Type a tech and press enter..."
            options={TechsObject}
            styles={selectStyle}
            onChange={(event) => setTechs(event)}
            value={techs}
            isClearable={false}
            isMulti
          />

          <hr />

          {!profile.login_with_github && (
            <>
              <Input
                name="oldPassword"
                type="password"
                placeholder="Old Password"
              />
              <Input
                name="password"
                type="password"
                placeholder="New Password"
              />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </>
          )}

          <TitleForm>Where else are you online?</TitleForm>

          <Input
            name="socialMedia.github_url"
            type="url"
            pattern="https://.*"
            placeholder="https://github.com/exampleName"
          />
          <Input
            name="socialMedia.linkedin_url"
            type="url"
            pattern="https://.*"
            placeholder="https://www.linkedin.com/in/example-name-bb4b51249/"
          />
          <Input
            name="socialMedia.youtube_url"
            type="url"
            pattern="https://.*"
            placeholder="https://www.youtube.com/user/exampleChannel"
          />
          <Input
            name="socialMedia.medium_url"
            type="url"
            pattern="https://.*"
            placeholder="https://medium.com/@example"
          />
          <Input
            name="socialMedia.twitter_url"
            type="url"
            pattern="https://.*"
            placeholder="https://twitter.com/example"
          />
          <Input
            name="socialMedia.website_url"
            type="url"
            pattern="https://.*"
            placeholder="https://myblogexample.com"
          />
        </Content>
        <UpdateButton>Update Profile</UpdateButton>
      </Form>
    </Container>
  );
}
