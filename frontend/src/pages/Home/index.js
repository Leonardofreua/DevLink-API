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

  /**
   * Get the current location if granted permission
   */
  useEffect(() => {
    function getCurrentUserLocation() {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permission) => {
          if (permission.state === 'granted' || permission.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(
              async (revealPosition) => {
                const { coords } = revealPosition;

                setLongitude(coords.longitude);
                setLatitude(coords.latitude);

                await api.put('/devs', { longitude, latitude });
                toast.success('Location enabled');
              },
              (err) => {
                toast.warn('Location disabled');
              },
              {
                timeout: 30000,
              }
            );
          } else if (permission.state === 'denied') {
            toast.warn('Location disabled');
          }
        });
    }

    getCurrentUserLocation();
  }, [longitude, latitude]);

  /**
   * Populates the state of devs if the user does not inform any
   * technology and the coordinates are filled.
   */
  useEffect(() => {
    async function loadDevsByLocation() {
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

    loadDevsByLocation();
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
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
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
                  <Link to={`/profile/${dev._id}`}>
                    <img
                      src={
                        (dev.file && dev.file.file_url) ||
                        dev.avatar_url ||
                        'http://api.adorable.io/avatars/50/abott@adorable.png'
                      }
                      alt={dev.name}
                    />
                  </Link>
                  <div>
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                  </div>
                </UserSection>
                <p>{dev.bio}</p>
                {dev.socialMedia && (
                  <a
                    href={dev.socialMedia.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Github profile
                  </a>
                )}
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
