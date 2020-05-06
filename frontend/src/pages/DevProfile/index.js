import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

function DevProfile() {
  const { id } = useParams();
  return <h1>{id}</h1>;
}

export default DevProfile;
