import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import {
  ContainerHeader,
  Content,
  Profile,
  ProfileAction,
  DropdownMenu,
  DropdownContainer,
  Options,
} from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [visible, setVisibile] = useState(false);

  function handleToggleVisible() {
    setVisibile(!visible);
  }

  function handleSignOut() {
    dispatch(signOut());
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
                <ProfileAction onClick={handleToggleVisible}>
                  <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt="User demo"
                  />
                </ProfileAction>
              </div>

              <DropdownContainer>
                <DropdownMenu visible={visible}>
                  <Link to="/profile">Profile</Link>
                  <button type="button" onClick={handleSignOut}>
                    Sign out
                  </button>
                </DropdownMenu>
              </DropdownContainer>
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
