import styled from 'styled-components';
import { darken } from 'polished';

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
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
  transition: background 0.4s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background: ${darken(0.03, '#28a745')};
  }
`;
