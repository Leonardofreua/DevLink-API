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

      setDev(response.data);
    }

    loadDevInformations();
  }, [id]);

  return (
    <Container>
      <img
        src={
          (dev.file && dev.file.file_url) ||
          dev.avatar_url ||
          'https://api.adorable.io/avatars/160/abott@adorable.png'
        }
        alt={dev.name}
      />
      <div>
        <strong>{dev.name}</strong>
        <span>{dev.techs && dev.techs.join(', ')}</span>
      </div>
      {dev.socialMedia && (
        <SocialMedia>
          {dev.socialMedia.github_url && (
            <a
              href={dev.socialMedia.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#24292e" size={30} />
            </a>
          )}

          {dev.socialMedia.twitter_url && (
            <a
              href={dev.socialMedia.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="#24292e" size={30} />
            </a>
          )}

          {dev.socialMedia.medium_url && (
            <a
              href={dev.socialMedia.medium_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium color="#24292e" size={30} />
            </a>
          )}

          {dev.socialMedia.linkedin_url && (
            <a
              href={dev.socialMedia.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#24292e" size={30} />
            </a>
          )}

          {dev.socialMedia.youtube_url && (
            <a
              href={dev.socialMedia.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube color="#24292e" size={30} />
            </a>
          )}

          {dev.socialMedia.website_url && (
            <a
              href={dev.socialMedia.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe color="#24292e" size={30} />
            </a>
          )}
        </SocialMedia>
      )}
      <p>{dev.bio}</p>
    </Container>
  );
}

export default DevProfile;
