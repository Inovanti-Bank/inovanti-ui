import { dark, light } from '@inovanti/tokens';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global';

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
      theme: themes.light
    }
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={light}>
        <GlobalStyle />
        <Story />
        </ThemeProvider>
      )
    }
  ],
  
};

export default preview;
