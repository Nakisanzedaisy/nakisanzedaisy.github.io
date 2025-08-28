import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f3f3f3',
    },
    background: {
      default: '#1d1b20',
      paper: '#1d1b20',
    },
    text: {
      primary: '#f3f3f3',
      secondary: '#f3f3f3',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: '#f3f3f3',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#f3f3f3',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#f3f3f3',
    },
  },
  shape: {
    borderRadius: 48,
  },
});

export default theme;