import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
  margin-top: 60px;

  align-items: center;
  justify-content: center;

  img {
    margin: 0 auto;
    display: flex;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 3px solid #95979c;
  }

  div {
    text-align: center;
    margin-top: 10px;

    strong {
      display: block;
      margin-bottom: 8px;
      font-size: 17px;
      color: #333;
    }

    span {
      font-size: 14px;
      color: #5b5f63;
    }
  }

  p {
    margin-top: 20px;
    text-align: center;
    text-justify: inter-word;
    color: #555;
  }
`;

export const SocialMedia = styled.div`
  margin-right: 20px;
  svg {
    margin-left: 20px;
  }
`;
