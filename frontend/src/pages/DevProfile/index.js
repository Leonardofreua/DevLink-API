import React, { useEffect, useState } from 'react';
import {
  FaGithub,
  FaTwitter,
  FaMedium,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import history from '~/services/history';
import api from '~/services/api';

import { Container, SocialMedia } from './styles';

function DevProfile() {
  const { id } = useParams();

  const [dev, setDev] = useState({});

  useEffect(() => {
    async function loadDevInformations() {
      const response = await api.get(`/search/${id}`);

      if (response.data) {
        setDev(response.data);
      } else {
        history.push('/');
      }
    }

    loadDevInformations();
  }, [id]);

  return (
    <Container>
      <img
        src={
          (dev.file && dev.file.file_url) ||
          dev.avatar_url ||
          'http://api.adorable.io/avatars/160/abott@adorable.png'
        }
        alt={dev.name}
      />
      <div>
        <strong>{dev.name}</strong>
        <span>ReactJS, Python, Rust</span>
      </div>
      <SocialMedia>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub color="#24292e" size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter color="#24292e" size={30} />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaMedium color="#24292e" size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#24292e" size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube color="#24292e" size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGlobe color="#24292e" size={30} />
        </a>
      </SocialMedia>
      <p>{dev.bio}</p>
    </Container>
  );
}

export default DevProfile;
