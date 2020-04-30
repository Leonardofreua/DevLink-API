import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

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
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState([]);

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const selectStyle = {
    control: (_, state) => ({
      boxShadow: state.isFocused ? 0 : 0,
    }),
  };

  const components = {
    DropdownIndicator: null,
  };

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (revealPosition) => {
        const { coords } = revealPosition;

        setLongitude(coords.longitude);
        setLatitude(coords.latitude);
        toast.success('Location enabled');
      },
      (err) => {
        toast.warn('Location disabled');
      },
      {
        timeout: 30000,
      }
    );
  }

  function handleAvatar(data) {

  }

  /**
   * Get the current location if granted permission
   */
  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
      if (permission.state === 'granted' || permission.state === 'prompt') {
        getCurrentLocation();
      } else if (permission.state === 'denied') {
        toast.warn('Location disabled');
      }
    });
  }, []);

  /**
   * Populates the state of devs if the user does not inform any
   * technology and the coordinates are filled.
   */
  useEffect(() => {
    async function loadDevsByCoordinates() {
      if (Object.keys(techs).length === 0 && longitude && latitude) {
        const response = await api.get('/search', {
          params: {
            longitude,
            latitude,
          },
        });
        setDevs(response.data);
      }
    }

    loadDevsByCoordinates();
  }, [techs, longitude, latitude]);

  async function handleSearch(event) {
    event.preventDefault();

    if (longitude && latitude) {
      /**
       * Search with techs and coords
       */
    } else {
      /**
       * Search with only techs
       */
    }
    // setTechs([]);
  }

  return (
    <>
      <SearchForm onSubmit={handleSearch}>
        <TechsSelect
          name="techs"
          components={components}
          noOptionsMessage={() => 'Tech not found'}
          placeholder="Type one or more technologies"
          options={TechsObject}
          styles={selectStyle}
          onChange={(event) => setTechs(event)}
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
        {devs.length > 0 ? (
          <ul>
            {devs.map((dev) => (
              <li key={dev._id}>
                <UserSection>
                  <Link to="/profile/1">
                    <img
                      src="https://avatars3.githubusercontent.com/u/11354911?s=460&u=956e5179cef8beb271883cc985b0e577c3482862&v=4"
                      alt="Leonardo Freua"
                    />
                  </Link>
                  <div>
                    <strong>Leonardo</strong>
                    <span>ReactJS, Python</span>
                  </div>
                </UserSection>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
                {/* <a href="#" target="_blank">
                Access Github profile
              </a> */}
              </li>
            ))}
          </ul>
        ) : (
          <span>No people were found nearby!</span>
        )}
      </List>
    </>
  );
}
