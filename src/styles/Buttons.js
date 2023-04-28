import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  color: #fff;
  cursor: pointer;
  max-width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;

  background-color: ${({ variant }) =>
    variant === 'green'
      ? '#1a8918'
      : variant === 'dark'
        ? '#000'
        : variant && 'red'
  };


`
