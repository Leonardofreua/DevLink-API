import styled from 'styled-components';

export const ForgotPassowrdContainer = styled.div`
  width: 100%;
  max-width: 360px;
  border-radius: 7px;
  border: 1px solid #dcdce6;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;

  h2 {
    font-size: 20px;
    text-align: center;
    margin: 15px 0 25px;
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
