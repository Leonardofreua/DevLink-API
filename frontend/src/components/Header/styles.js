import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #24292e;
  width: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  }

  img {
    width: 120px;
    height: 60px;
    margin-left: 60px;
  }
`;

export const Options = styled.div`
  margin-right: 60px;
  justify-content: space-between;

  a:first-of-type {
    padding: 7px;
    border-right: 1px solid #666;
  }

  a {
    margin-right: 10px;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    color: #28a745;
    text-decoration: none;
  }
`;
