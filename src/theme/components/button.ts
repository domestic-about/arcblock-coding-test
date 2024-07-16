// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  borderRadius: '8px', // disable the border radius
  fontWeight: '500', // change the font weight to normal
  fontFamily: 'Inter', // change the font family to monospaced
  boxShadow: '0px -4px 0px -1px #9F91F3',

  _hover: {
    boxShadow: 'none',
    bgColor: 'brand.700 !important',
    color: 'white',
  },
  _disabled: {
    bgColor: 'brand.100',
  },
});

const sizes = {
  md: defineStyle({
    fontSize: 'md', // Change font size to sm (14px)
  }),
};

// Defining a custom variant
const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.500`,
    fontWeight: 'semibold',
    color: 'white',
    borderRadius: '8px',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    _dark: {
      bg: `${c}.200`,
      color: 'gray.800',
    },

    _hover: {
      // transform: "scale(1.05, 1.05)",
      bg: `${c}.600`,

      _dark: {
        bg: `${c}.300`,
      },
    },

    _active: {
      bg: `${c}.700`,
      transform: 'scale(1, 1)',

      _dark: {
        bg: `${c}.400`,
      },
    },
  };
});

const transparentVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.500`,
    fontWeight: 'semibold',
    color: 'black',
    borderRadius: '8px',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    borderColor: 'base.50',
    borderWidth: '1px',
    _dark: {
      bg: `${c}.200`,
      color: 'gray.800',
    },

    _hover: {
      // transform: "scale(1.05, 1.05)",
      // bg: `rgba(255, 255, 255, 0.15)`,
      color: 'white',

      _dark: {
        bg: `${c}.300`,
      },
    },

    _active: {
      bg: `${c}.700`,
      transform: 'scale(1, 1)',

      _dark: {
        bg: `${c}.400`,
      },
    },
  };
});

export default defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    custom: customVariant,
    transparent: transparentVariant,
  },
  defaultProps: {
    colorScheme: 'black', // set the default color scheme to purple
  },
});
