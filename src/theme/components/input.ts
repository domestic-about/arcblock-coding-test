/* eslint-disable import/no-extraneous-dependencies */
import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 1,
      cursor: 'not-allowed',
      color: 'base.100',
    },
    _placeholder: {
      color: 'base.50',
    },
  },
});

const variantOutline = definePartsStyle(() => {
  return {
    field: {
      fontFamily: 'Inter', // change font family to mono
      // _focus: {
      //   borderColor: "brand.500",
      // },
    },
  };
});

const variantFilled = definePartsStyle(() => {
  return {
    field: {
      fontWeight: 'semibold', // change font weight to semibold
    },
  };
});

// Defining a custom variant
const variantCustom = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
    field: {
      border: '0px solid',
      bg: 'brand.500',
      borderTopRightRadius: 'full',
      borderBottomRightRadius: 'full',
      _dark: {
        bg: 'whiteAlpha.50',
      },

      _hover: {
        bg: 'gray.200',
        _dark: {
          bg: 'whiteAlpha.100',
        },
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _focusVisible: {
        bg: 'gray.200',

        _dark: {
          bg: 'whiteAlpha.100',
        },
      },
    },
    addon: {
      border: '0px solid',
      borderColor: 'transparent',
      borderTopLeftRadius: 'full',
      borderBottomLeftRadius: 'full',
      bg: `${c}.500`,
      color: 'white',
      _dark: {
        bg: `${c}.300`,
        color: `${c}.900`,
      },
    },
    element: {
      bg: 'white',
      rounded: 'full',
      border: '1px solid',
      borderColor: 'gray.100',
      _dark: {
        bg: 'whiteAlpha.50',
        borderColor: 'whiteAlpha.100',
      },
    },
  };
});

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  custom: variantCustom,
};

const size = {
  md: defineStyle({
    fontSize: 'sm',
    px: '4',
    h: '10',
    borderRadius: '8px',
  }),
};

const sizes = {
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
