import styled from 'styled-components';

export const Container = styled.div`

    h1 {
        font-size: 2.5em;
        text-align: center;
    }

    p {
        margin: 1em 0em;
        text-align: center;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: bold;
        font-size: 1.1em;            

        padding: .5em;
        border-bottom: 1px solid #000; 
    }

    table {
        width: 100%;
        border-collapse: collapse;

        tr {
            td:nth-child(2) {
                display: flex;
                gap: 10px;
                justify-content: right;
            }
        }
    }
`;

export const NoPosts = styled.div`

`
