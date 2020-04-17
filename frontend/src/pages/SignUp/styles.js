import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextualContent = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 37px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    margin-top: 40px;
    color: #5e5e6b;
    text-align: center;
  }
`;

export const SignUpContainer = styled.div`
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

export const SubmitButton = styled.button`
  width: 100%;
  height: 47px;
  background: #28a745;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-top: 30px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 47px;

  &:hover {
    background: ${darken(0.03, '#28a745')};
  }
`;
