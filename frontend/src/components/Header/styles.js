import styled from 'styled-components';

export const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #24292e;

  img {
    width: 120px;
    margin-left: 60px;
  }
`;

export const Options = styled.div`
  margin-right: 50px;
  justify-content: space-between;

  a:first-of-type {
    padding: 10px;
    border-right: 1px solid #666;
  }

  a {
    margin-right: 10px;
    align-items: center;
    font-size: 21px;
    font-weight: bold;
    color: #28a745;
    text-decoration: none;
  }
`;
