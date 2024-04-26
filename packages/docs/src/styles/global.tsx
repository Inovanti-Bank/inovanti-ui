import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    html {
        font-size: 16px;
        @media (max-width: 768px) {
            font-size: 14px;
        }
        @media (max-width: 480px) {
            overflow-y: scroll;
        }
        overflow-x: hidden;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};

    }
`