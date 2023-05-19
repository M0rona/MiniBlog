import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 2em;
    max-width: 600px;
    
    img {
        max-width: 600px;
    }

    .createdBy {
        font-style: italic;
        color: #444;
        font-size: .8em;
        padding: 10px 0px;
    }

    .tags {
        margin-bottom: 1.2em;
        display: flex;
        flex-wrap: wrap;

        p {
            margin-right: .5em;
        }

        span {
            font-weight: bold;
        }
    }


`;
