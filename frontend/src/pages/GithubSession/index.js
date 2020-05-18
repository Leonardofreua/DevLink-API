import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { githubOAuthRequest } from '~/store/modules/auth/actions';

export default function GithubSession({ location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleOAuth({ search }) {
      const [, requestToken] = search.split('=');
      dispatch(githubOAuthRequest(requestToken));
    }

    handleOAuth(location);
  }, [location, dispatch]);

  return <Spinner animation="grow" variant="success" />;
}

GithubSession.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
