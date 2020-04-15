import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Options } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="DevLink" />
      </Link>

      <Options>
        <Link to="/">Sign_up</Link>
        <Link to="/logIn">Log_in</Link>
      </Options>
    </Nav>
  );
}
