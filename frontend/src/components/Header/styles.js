import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background: #24292e;
  padding: 0 30px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 60px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div``;

export const Options = styled.div`
  margin-right: 60px;
  padding-left: 20px;

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
