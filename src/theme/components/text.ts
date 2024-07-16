// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

// Defining a custom variant
const h1Variant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontWeight: 'semibold',
    fontFamily: 'Unbounded Variable',
    color: c ? c['500'] : '#000',
    fontSize: [32, 36, 48],
  };
});
const h2Variant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontWeight: 'semibold',
    fontFamily: 'Unbounded Variable',
    color: c ? c['500'] : '#000',
    fontSize: '30px',
  };
});

// Defining a custom variant
const p1Variant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontWeight: '400',
    color: c ? c['500'] : '#000',
    fontSize: '16px',
  };
});
const pageLinkVariant = defineStyle(() => {
  return {
    fontWeight: '500',
    color: 'secondary.600',
    fontSize: '16px',
    backgroundColor: 'transparent',
    _hover: {
      textDecoration: 'none',
      backgroundColor: 'rgb(240, 240, 253)',
      borderRadius: 2,
    },
  };
});

export default defineStyleConfig({
  variants: {
    h1: h1Variant,
    h2: h2Variant,
    p1: p1Variant,
    pageLink: pageLinkVariant,
  },
  defaultProps: {},
});
