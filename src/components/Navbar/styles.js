import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, .15) 0px -2px 10px 0px;
    padding: 1.5em 2em;

    .brand {
        font-size: 1.2em;

        span {
            font-weight: 900;
            text-transform: uppercase;
        }
    }

    ul {
        display: flex;
        list-style: none;
        gap: 1rem;

        li a {
           padding: .4em .6em ;
           
        }

        .active {            
           background-color: #000;
           color: #fff;
           border-radius: 8px;
        }
    }

`;
