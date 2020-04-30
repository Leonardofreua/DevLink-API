import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { lighten } from 'polished';

import Select from '~/styles/components/TechSelect';

export const SearchForm = styled(Form)`
  display: flex;
  width: 100%;
  max-width: 480px;
  margin-top: 30px;
  align-items: center;
`;

export const TechsSelect = styled(Select)`
  width: 100%;
  max-width: 420px;
  margin-right: 8px;
  padding: 5px;
  background: #e6e6f4;
  border: 1px solid #dcdce6;
  border-radius: 5px;
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.75);
`;

export const ResultLegend = styled.div`
  margin: 40px 0 25px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  margin-top: 8px;
`;

export const List = styled.main`
  flex: 1;

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
