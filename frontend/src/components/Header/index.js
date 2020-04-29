import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ContainerHeader, Content, Profile, Options } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <ContainerHeader>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="DevLink" />
          </Link>
        </nav>

        <aside>
          {auth.signed ? (
            <Profile>
              <h1>Test</h1>
            </Profile>
          ) : (
            <Options>
              <Link to="/">Sign_up</Link>
              <Link to="/logIn">Log_in</Link>
            </Options>
          )}
        </aside>
      </Content>
    </ContainerHeader>
  );
}
