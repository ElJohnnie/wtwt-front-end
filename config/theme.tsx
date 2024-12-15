import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontSize: '64px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          padding: '10px 20px',
          borderRadius: '20px',
        },
      },
      defaultProps: {
        size: 'large',
      },
    },
  },
});

theme.typography.h2 = {
  fontSize: '42px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
  },
};

export default theme;
