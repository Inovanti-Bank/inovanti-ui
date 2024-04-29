import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import React from 'react';

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
        <Story />
        </div>
      )
    }
  ],
  
};

export default preview;
