// 1. import `extendTheme` function
// eslint-disable-next-line import/no-extraneous-dependencies
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import buttonTheme from './components/button';
import inputTheme from './components/input';
import textTheme from './components/text';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  config,
  colors: {
    brand: {
      '10': '#F1EFFD',
      '50': '#c3bde7',
      '100': '#a198d9',
      '200': '#9085d2',
      '300': '#7f72cb',
      '400': '#6e60c4',
      '500': '#5141B0',
      '600': '#40338b',
      '700': '#372c78',
      '800': '#2f2566',
      '900': '#1e1840',
    },
    secondary: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#F1EFFD',
      '600': '#c9c2f7',
      '700': '#b5abf5',
      '800': '#a294f2',
      '900': '#7a67ec',
    },
    black: {
      '50': '#595959',
      '100': '#404040',
      '200': '#333333',
      '300': '#262626',
      '400': '#1a1a1a',
      '500': '#090909',
      '600': '#111111',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
    },
    grey: {
      '50': '#6a7282',
      '100': '#535a66',
      '200': '#484d58',
      '300': '#3c414a',
      '400': '#31353c',
      '500': '#1A1C20',
      '600': '#030304',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
    },
    base: {
      '15': 'rgba(255, 255, 255, 0.15)',
      '40': 'rgba(0, 0, 0, 0.4)',
      '50': '#7A7D82',
      '60': '#4F5153',
      '80': '#F6F6F6',
      '100': '#000000',
    },
    warning: {
      '50': '#fef2d2',
      '100': '#fde3a0',
      '200': '#fddb87',
      '300': '#fcd46e',
      '400': '#fccc55',
      '500': '#FBBD23',
      '600': '#e7a604',
      '700': '#ce9404',
      '800': '#b58203',
      '900': '#835e02',
    },
    info: '#3ABFF8',
    error: '#F87272',
    success: '#28BB84',
    white: '#FFFFFF',
  },

  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'gradient1',
          rounded: '8px',
        },
      },
    },
    Text: textTheme,
  },
});

export default theme;
