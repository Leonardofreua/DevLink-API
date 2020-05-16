import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { signOut } from '~/store/modules/auth/actions';

import ModalSettings from '~/components/ModalSettings';

import {
  ContainerHeader,
  Content,
  Profile,
  LocationIcon,
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
  const locationStatus = useSelector((state) => state.dev.locationStatus);

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom" placement="bottom">
                    {locationStatus ? (
                      <>
                        Click and adjust the search distance to find more
                        people.
                      </>
                    ) : (
                      <>
                        Click on the icon{' '}
                        <AiFillExclamationCircle color="#fff" size={20} />{' '}
                        located in the address bar to <strong>enable</strong>{' '}
                        your location.
                      </>
                    )}
                  </Tooltip>
                }
              >
                <LocationIcon
                  locationStatus={locationStatus}
                  onClick={() => setShowSettings(true)}
                >
                  <MdLocationOn size={30} />
                </LocationIcon>
              </OverlayTrigger>

              <ModalSettings
                show={showSettings}
                onHide={() => setShowSettings(false)}
              />

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
