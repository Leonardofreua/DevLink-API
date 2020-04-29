import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ContainerHeader, Options } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <ContainerHeader>
      <Link to="/">
        <img src={logo} alt="DevLink" />
      </Link>

      {auth.signed ? (
        <h6>sgined</h6>
      ) : (
        <Options>
          <Link to="/">Sign_up</Link>
          <Link to="/logIn">Log_in</Link>
        </Options>
      )}
    </ContainerHeader>
  );
}
