import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  margin: 20px 0px;
  
  padding: ${({ variant }) =>
    variant === 'outline' ? '7px 30px' : '10px 15px'
  };

  color: ${({ variant }) =>
    variant === 'outline' || variant === 'danger-outline' ? '#000' : '#fff'
  };
  
  border: ${({ variant }) =>
    variant === 'outline' || variant === 'danger-outline' ? '1px solid #000' : 'none'
  };

  background-color: ${({ variant }) =>
    variant === 'green' ? '#1a8918'
      : variant === 'dark' ? '#000' : 'transparent'
  };

  border-radius: ${({ variant }) =>
    variant === 'green' ? '10px' : '0'
  };

  /* Hover */
  &:hover {
    background-color: ${({ variant }) =>
    variant === 'green' ? '#0F730C'
      : variant === 'outline' ? '#000'
        : variant === 'danger' || variant === "danger-outline" ? '#DC3545' : 'none'
  };

    ${({ variant }) =>
    variant === 'outline' || variant === 'danger-outline' ? 'color: #fff' : ''
  }


  }

  &[disabled] {
    background-color: #aaa;
    border: none;
    padding: 10px 15px;
    color: #000;
  }

`
