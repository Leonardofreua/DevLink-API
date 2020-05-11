import React, { useState, useRef, useEffect } from 'react';
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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.dev.profile);

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleMenu(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleMenu);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleMenu);
    };
  }, [ref]);

  function handleToggleMenu() {
    setVisible(true);
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
                <ProfileAction onClick={handleToggleMenu}>
                  <img
                    src={
                      (profile.avatar && profile.avatar.file_url) ||
                      profile.avatar ||
                      'http://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt={profile.name}
                  />
                </ProfileAction>
              </div>

              <DropdownContainer>
                <DropdownMenu ref={ref} visible={visible}>
                  <Link to="/profile" onClick={() => setVisible(false)}>
                    Profile
                  </Link>
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
