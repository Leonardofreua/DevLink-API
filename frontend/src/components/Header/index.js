import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  ContainerHeader,
  Content,
  Profile,
  Dropdown,
  DropdownMenu,
  Options,
} from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const [visible, setVisibile] = useState(false);

  const auth = useSelector((state) => state.auth);

  function handleToggleVisible() {
    setVisibile(!visible);
  }

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
              <div>
                <Dropdown onClick={handleToggleVisible}>
                  <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt="User demo"
                  />
                  <span />
                </Dropdown>
              </div>

              <DropdownMenu visible={visible}>
                <Link to="/profile">Profile</Link>
                <Link to="/signOut">Sign out</Link>
              </DropdownMenu>
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
