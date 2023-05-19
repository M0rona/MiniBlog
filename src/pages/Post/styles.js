import styled from 'styled-components';

export const Container = styled.section`

    display: flex;
    justify-content: center;


    .content {
        display: flex;
        flex-direction: column;
        gap: 2em;
        max-width: 70%;

        .tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            span {
                font-weight: bold;
            }

        }
    }

    
`;
