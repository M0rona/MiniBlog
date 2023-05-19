import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    form {
        max-width: 100%;
        width: 60%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        input {
            width: 50%;

        }
    }

    .noposts {
        text-align: center;

        p {
            margin-bottom: 1.5em;
        }

        a {
            padding: 10px 25px;
        }
    }
`;
