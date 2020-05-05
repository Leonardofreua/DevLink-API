import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';

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
import { parseArrayObjectsToString } from '~/pages/utils/parseTechs';

import { setUserLocationRequest } from '~/store/modules/dev/actions';

export default function Home() {
  const dispatch = useDispatch();

  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState({});
  const [total, setTotal] = useState(0);
  const [searched, setSearched] = useState(false);
  const [techsParsed, setTechsParsed] = useState([]);

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

  useEffect(() => {
    function checkPermissionStatus() {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permission) => {
          if (permission.state === 'granted') {
            toast.success('Location enabled');
          } else if (permission.state === 'denied') {
            toast.info('Location disabled');
          }
        });
    }

    checkPermissionStatus();
  }, []);

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

                dispatch(setUserLocationRequest(longitude, latitude));
              },
              (err) => {
                console.tron.log(err);
              },
              {
                timeout: 30000,
              }
            );
          } else if (permission.state === 'denied') {
            dispatch(setUserLocationRequest(longitude, latitude));
          }
        });
    }

    getCurrentUserLocation();
  }, [longitude, latitude, dispatch]);

  async function searchUsers(techsArray = []) {
    const response = await api.get('/search', {
      params: {
        techs: techsArray.toString(),
        longitude,
        latitude,
      },
    });
    setDevs(response.data);
    setTotal(response.data.length);
  }

  /**
   * Populates the state of devs if the user does not inform any
   * technology and the coordinates are filled.
   */
  useEffect(() => {
    async function loadDevsByLocation() {
      if (total > 0 && devs.length === total) {
        return;
      }

      if (isEmpty(techs) && longitude && latitude) {
        await searchUsers();
      }
    }

    loadDevsByLocation();
  }, [techs, longitude, latitude, total]);

  /**
   * Perform the user search using the following fields as base:
   *
   * @type {number} longitude
   * @type {number} latitude
   * @type {(String|Array)} techs
   *
   * @param {Array|Object} event from onChange of techs select
   */
  async function handleSearch(event) {
    event.preventDefault();

    if (isEmpty(techs) && longitude && latitude) {
      await searchUsers();
    } else if (!isEmpty(techs) && longitude && latitude) {
      /**
       * Search with techs and coords
       */
      const listTechs = parseArrayObjectsToString(techs);

      await searchUsers(listTechs);

      setTechsParsed(listTechs);
      setSearched(true);
    } else if (!isEmpty(techs)) {
      /**
       * Search with only techs
       */
      const listTechs = parseArrayObjectsToString(techs);

      await searchUsers(listTechs);

      setTechsParsed(listTechs);
      setSearched(true);
    }
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
        There’re <strong>{total}</strong> people near you
        {!isEmpty(techs) && searched
          ? ` who know or are learning: ${techsParsed.join(', ')}`
          : ''}
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
