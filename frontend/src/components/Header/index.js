import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

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
                <button type="button" onClick={handleSignOut}>
                  Sign out
                </button>
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
