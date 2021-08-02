import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const fonts = {
  heading: 'Clonoid, sans-serif',
  body: 'HelNeue, sans-serif'
};

const styles = {
  global: {
    body: {
      bg: '#000000',
      color: '#ffffff'
    }
  },
};

const colors = {
  brand: {
    100: '#1048a0',
    150: '#006fe8',
    200: '#fcae12',
    300: '#00c6ae',
    400: '#df0024',
    500: '#c33ece'
  }
};

const Button = {
  baseStyle: {
    fontFamily: fonts.heading,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderRadius: '999px'
  },
  sizes: {
    md: {
      padding: '8px 26px',
      fontSize: '14px'
    }
  },
  variants: {
    ghost: {
      height: '30px'
    },
    outline: {
      height: '30px',
      borderRadius: '999px',
      borderWidth: '2px'
    },
    link: {
      _focus: {
        boxShadow: 'none'
      }
    }
  }
};

const Input = {
  variants: {
    flushed: {
      field: {
        _placeholder: { color: 'rgba(255,255,255,0.5)' }
      }
    }
  }
};

const Textarea = {
  variants: {
    flushed: {
      _placeholder: { color: 'rgba(255,255,255,0.8)' }
    }
  }
};

const FormLabel = {
  baseStyle: {
    marginBottom: 0,
    fontFamily: fonts.heading,
    fontSize: '12px',
    textTransform: 'uppercase'
  }
};

const theme = {
  fonts,
  styles,
  colors,
  components: {
    Button,
    Input,
    Textarea,
    FormLabel,
    Steps
  }
};

export { colors, fonts, theme };
