import React, { useState, useEffect } from 'react';
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

import { TechsObject } from '~/utils/TechsObject';

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
      <Form initialData={profile} onSubmit={handleSubmit}>
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
