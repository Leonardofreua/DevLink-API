import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
    text-align: center;
    margin: 15px 0 15px;
  }

  form {
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
  }
`;
