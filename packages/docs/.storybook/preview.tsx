import { dark } from '@inovanti/react';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global';

import '@inovanti/react/dist/index.css';

const preview: Preview = {  
  
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark'
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className='dark'>

        <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Story />
        </ThemeProvider>
        </div>
      )
    }
  ],
  
};

export default preview;
