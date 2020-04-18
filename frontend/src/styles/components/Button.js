import styled from 'styled-components';
import { darken } from 'polished';

export const SubmitButton = styled.button`
  width: 100%;
  height: 47px;
  background: #28a745;
  border: 0;
  border-radius: 7px;
  color: #fff;
  margin-top: 30px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 47px;

  &:hover {
    background: ${darken(0.03, '#28a745')};
  }
`;
