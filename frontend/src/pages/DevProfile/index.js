import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

export default function DevProfile() {
  const { id } = useParams();
  return <h1>{id}</h1>;
}
