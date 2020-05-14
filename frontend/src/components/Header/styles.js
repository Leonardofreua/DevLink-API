import styled from 'styled-components';
import { lighten } from 'polished';

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
  max-width: 1200px;
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

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
  }
`;

export const ProfileAction = styled.button`
  background: none;
  border: 0;
  position: relative;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin-left: 9px;
    top: calc(11% + 15px);
    vertical-align: middle;
    border-top-style: solid;
    border-top-width: 4px;
    border-top: 4px solid #c4c4c4;
    border-right: 4px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 4px solid transparent;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  z-index: 1;
  width: 120px;
  left: calc(50% - 86px);
  top: calc(87% + 20px);
  background: #fff;
  padding: 15px 5px;
  background-clip: padding-box;
  border: 1px solid #dcdce6;
  border-radius: 7px;
  box-shadow: 2px 4px 18px -6px rgba(0, 0, 0, 0.75);
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(57% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    margin-top: 5px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid #fff;
  }

  button {
    display: flex;
    background: none;
    border: none;
    margin-top: 13px;
    padding: 10px;
    padding-bottom: 0;
  }

  a {
    display: flex;
    padding: 10px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
    border-bottom: 1px solid rgba(27, 31, 35, 0.15);
  }

  a:hover {
    color: ${lighten(0.2, '#000')};
  }
`;

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
