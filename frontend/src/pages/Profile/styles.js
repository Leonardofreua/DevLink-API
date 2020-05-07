import styled from 'styled-components';
import { darken } from 'polished';

import Select from '~/styles/components/TechSelect';

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 210px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    flex-direction: column;

    input {
      width: 100%;
      height: 47px;
      margin-top: 13px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 7px;
      padding: 0 20px;
      margin: 0 0 10px;
      box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.5);
    }

    textarea {
      width: 100%;
      resize: none;
      min-height: 140px;
      margin: 0 0 5px;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 16px 24px;
      line-height: 24px;
      box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.5);
    }

    hr {
      border: 1px solid #dedfe0;
      height: 1px;
      margin: 10px 0 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const TechsSelect = styled(Select)`
  margin-bottom: 20px;
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.5);
`;

export const TitleForm = styled.h2`
  margin: 30px 0 30px;
  color: #666;
  font-size: 17px;
`;

export const UpdateButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 47px;
  margin: 0 auto;
  background: #28a745;
  border: 0;
  border-radius: 7px;
  color: #fff;
  margin-top: 30px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 47px;
  transition: background 0.6s;

  &:hover {
    background: ${darken(0.06, '#28a745')};
  }
`;
