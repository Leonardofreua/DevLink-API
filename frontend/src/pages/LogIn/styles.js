import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 330px;
  border-radius: 7px;
  border: 1px solid #dcdce6;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;

  h2 {
    font-size: 20px;
    text-align: center;
    margin: 15px 0 15px;
  }

  div:first-of-type {
    text-align: center;
    padding: 30px 0 20px;
    border-bottom: 1px solid #dcdce6;

    a {
      font-weight: 400;
      color: #187026;
      text-decoration: none;
      opacity: 0.9;
    }

    a:hover {
      opacity: 1;
    }
  }

  div:nth-of-type(2) {
    margin-top: 30px;
    text-align: center;
    font-weight: 400;

    a {
      display: block;
      color: #187026;
      font-weight: bold;
      text-decoration: none;
      opacity: 0.7;
    }

    a:hover {
      opacity: 1;
    }
  }
`;

export const GithubLoginButton = styled(Link)`
  width: 100%;
  height: 47px;
  background: #5c5c5c;
  border: 0;
  border-radius: 7px;
  color: #fff;
  margin-top: 18px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 47px;
  text-decoration: none;
  transition: background 0.4s;

  svg {
    vertical-align: middle;
  }

  &:hover {
    background: ${darken(0.03, '#5C5C5C')};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    height: 47px;
    margin-top: 13px;
    color: #666;
    border: 1px solid #dcdce6;
    border-radius: 7px;
    padding: 0 20px;
    margin: 0 0 10px;
  }
`;
