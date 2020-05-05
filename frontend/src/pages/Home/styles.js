import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import Select from '~/styles/components/TechSelect';

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 520px;
  margin-top: 30px;
  align-items: center;
`;

export const TechsSelect = styled(Select)`
  width: 100%;
  max-width: 470px;
  margin-right: 8px;
  margin-left: 20px;
  padding: 5px;
  background: #e6e6f4;
  border: 1px solid #dcdce6;
  border-radius: 5px;
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.75);
`;

export const ResultLegend = styled.div`
  max-width: 470px;
  margin: 40px 0 25px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  margin-top: 8px;
`;

export const List = styled.main`
  flex: 1;
  margin: 0 auto;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    list-style: none;

    li {
      background: #fff;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
      border-radius: 7px;
      padding: 20px;

      p {
        color: #666;
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0;
      }

      a {
        color: #187026;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.4s;
      }

      a:hover {
        color: ${lighten(0.1, '#0F862A')};
      }
    }
  }

  span {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.p`
  width: 100%;
  max-width: 50px;
  padding-top: 100px;
  text-align: center;
  margin: 0 auto;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    margin-left: 10px;

    strong {
      display: block;
      font-size: 16px;
      color: #333;
    }

    span {
      font-size: 13px;
      color: #5b5f63;
      margin-top: 2px;
    }
  }
`;
