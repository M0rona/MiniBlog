import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    text-align: center;
    font-size: 2.5em;
  }

  p {
    text-align: center;
    margin: 1em 0;

    a {
        color: #2556e8;
        text-decoration: underline;
    }

  }

  .buttons {
    display: flex;
    justify-content: center;

    button {
      width: 50%;
    }
  }

  .check {
    display: flex;
    gap: 10px;

    margin-top: 1em;

    input {
      width: 18px;
      background-color: #2556e8;
    }
  }
`;
