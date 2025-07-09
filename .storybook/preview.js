import React from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    primary: "#002951",
    secondary: "#dc004e",
    tertiary: "#9c27b0",
    background: "#ffffff",
    gray: "#f5f5f5",
    grayText: "#757575",
    scrollBar: "#c1c1c1",
    text: "#212121",
    navBarIcons: "#424242",
    success: "#4caf50",
    error: "#f44336",
    warning: "#ff9800"
  }
};

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
};

export default preview;