import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function NoAuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

NoAuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
