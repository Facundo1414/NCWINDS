import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    h3: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.2rem'
    }
  },

  breakpoints: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  }
});

theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.body1 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
};

export default theme;