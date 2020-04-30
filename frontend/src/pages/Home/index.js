import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  SearchForm,
  TechsSelect,
  SearchButton,
  ResultLegend,
  List,
  UserSection,
} from './styles';

import { TechsObject } from '~/pages/utils/TechsObject';

export default function Home() {
  const selectStyle = {
    control: (_, state) => ({
      boxShadow: state.isFocused ? 0 : 0,
    }),
  };

  const components = {
    DropdownIndicator: null,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
      },
      (err) => {
        toast.warn(
          "There was a problem retrieving your location. Please check your browser's location permissions."
        );
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <>
      <SearchForm onSubmit={() => {}}>
        <TechsSelect
          name="techs"
          components={components}
          noOptionsMessage={() => 'Tech not found'}
          placeholder="Type one or more technologies"
          options={TechsObject}
          styles={selectStyle}
          isMulti
        />

        <SearchButton>
          <MdSearch size={30} />
        </SearchButton>
      </SearchForm>

      <ResultLegend>
        There’re <strong>6</strong> people near you who <u>know</u> or are{' '}
        <u>learning</u>: <strong>React and NodeJS</strong>
      </ResultLegend>

      <List>
        <ul>
          <li>
            <UserSection>
              <Link to="/profile/1">
                <img
                  src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                  alt="Leonardo Freua"
                />
              </Link>
              <div>
                <strong>Leonardo Freua</strong>
                <span>ReactJS, NodeJS, React Native</span>
              </div>
            </UserSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <a href="#" target="_blank">
              Access Github profile
            </a>
          </li>

          <li>
            <UserSection>
              <img
                src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                alt="Leonardo Freua"
              />
              <div>
                <strong>Leonardo Freua</strong>
                <span>ReactJS, NodeJS, React Native</span>
              </div>
            </UserSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <a href="#" target="_blank">
              Access Github profile
            </a>
          </li>

          <li>
            <UserSection>
              <img
                src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                alt="Leonardo Freua"
              />
              <div>
                <strong>Leonardo Freua</strong>
                <span>ReactJS, NodeJS, React Native</span>
              </div>
            </UserSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <a href="#" target="_blank">
              Access Github profile
            </a>
          </li>

          <li>
            <UserSection>
              <img
                src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                alt="Leonardo Freua"
              />
              <div>
                <strong>Leonardo Freua</strong>
                <span>ReactJS, NodeJS, React Native</span>
              </div>
            </UserSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <a href="#" target="_blank">
              Access Github profile
            </a>
          </li>

          <li>
            <UserSection>
              <Link to="/profile">
                <img
                  src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                  alt="Leonardo Freua"
                />
              </Link>
              <div>
                <strong>Leonardo Freua</strong>
                <span>ReactJS, NodeJS, React Native</span>
              </div>
            </UserSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <a href="#" target="_blank">
              Access Github profile
            </a>
          </li>
        </ul>
      </List>
    </>
  );
}
