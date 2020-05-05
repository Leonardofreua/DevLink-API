import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { PaginationContainer } from './styles';

export default function Pagination({ dataPerPage, totalData, paginate }) {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalData / dataPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((page) => (
        <NavLink key={page} onClick={() => paginate(page)} to={`/home/${page}`}>
          {page}
        </NavLink>
      ))}
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  dataPerPage: PropTypes.number.isRequired,
  totalData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  paginate: PropTypes.func.isRequired,
};
