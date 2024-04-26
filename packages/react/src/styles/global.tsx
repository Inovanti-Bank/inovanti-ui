import { dark as darkTheme, light as LightTheme } from '@inovanti/tokens'
import { createGlobalStyle } from 'styled-components'

export const dark = darkTheme
export const light = LightTheme

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
        font-family: 'Lato', sans-serif;
    }
`
