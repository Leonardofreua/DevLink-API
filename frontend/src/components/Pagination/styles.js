import styled from 'styled-components';

import { darken } from 'polished';

export const PaginationContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(8, 3fr);
  gap: 5px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  a {
    color: #24292e;
    float: left;
    margin-top: 30px;
    padding: 8px 15px;
    text-decoration: none;
    text-align: center;
    border-radius: 7px;
    border: 1px solid #dcdce6;
  }

  a.active {
    background: #28a745;
    color: #fff;
    transition: background 0.4s;
  }

  a.active:hover {
    background: ${darken(0.03, '#28a745')};
  }

  a:not(.active) {
    transition: background 0.4s;
  }

  a:hover:not(.active) {
    background: ${darken(0.03, '#28a745')};
    background-color: #ddd;
  }
`;
