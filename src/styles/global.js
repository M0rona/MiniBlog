import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Inter', sans-serif;
        background-color: #F6FCFF;
    }

    main {
        min-height: 65%;
        padding: 3em;
    }

    input::placeholder,
    textarea::placeholder {
        font-family: 'Inter', sans-serif;
        color: #AAA;
    }

    a, nav button {
        text-decoration: none;
        background-color: transparent;
        border: none;
        color: #000;
        transition: .3s;
        font-size: 1em;
        cursor: pointer;
    }

    a:hover, nav button:hover {
        color: #bbb;
    }

    /* Form Styles */

    form {
        max-width: 40%;
        margin: 0 auto;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1px;
    }

    label span {
        margin-bottom: .3em;
        font-weight: bold;
        text-align: left;
    }

    input, textarea {
        border: none;
        border-bottom: 1px solid #CCC;
        padding: .8em 1em;
        background-color: transparent;
    }

    .error {
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
    }
`