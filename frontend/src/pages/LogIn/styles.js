import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 330px;
  border-radius: 7px;
  border: 1px solid #dcdce6;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;

  h2 {
    font-size: 22px;
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

  svg {
    vertical-align: middle;
  }

  &:hover {
    background: ${darken(0.03, '#5C5C5C')};
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 280px;

  input {
    width: 100%;
    height: 47px;
    margin-top: 13px;
    color: #666;
    border: 1px solid #dcdce6;
    border-radius: 7px;
    padding: 0 20px;
  }
`;
