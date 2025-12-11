import { createTheme } from '@mui/material/styles';

// Expressive color palette - Warm sunset meets midnight
const colors = {
  // Primary accent - Vibrant coral/orange
  coral: '#FF6B4A',
  coralLight: '#FF8A6A',
  coralDark: '#E55A3A',
  
  // Secondary - Rich teal
  teal: '#2DD4BF',
  tealLight: '#5EEAD4',
  tealDark: '#14B8A6',
  
  // Accent - Golden amber
  amber: '#F59E0B',
  amberLight: '#FBBF24',
  amberDark: '#D97706',
  
  // Background - Deep rich dark
  bgDark: '#0F0F1A',
  bgMedium: '#161625',
  bgLight: '#1E1E32',
  bgCard: 'rgba(30, 30, 50, 0.6)',
  
  // Text
  textPrimary: '#FAFAFA',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',
  
  // Gradients
  gradientPrimary: 'linear-gradient(135deg, #FF6B4A 0%, #F59E0B 50%, #2DD4BF 100%)',
  gradientWarm: 'linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)',
  gradientCool: 'linear-gradient(135deg, #2DD4BF 0%, #3B82F6 100%)',
  gradientHero: 'linear-gradient(135deg, #0F0F1A 0%, #1E1E32 50%, #0F0F1A 100%)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.coral,
      light: colors.coralLight,
      dark: colors.coralDark,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.teal,
      light: colors.tealLight,
      dark: colors.tealDark,
      contrastText: '#FFFFFF',
    },
    warning: {
      main: colors.amber,
      light: colors.amberLight,
      dark: colors.amberDark,
    },
    background: {
      default: colors.bgDark,
      paper: colors.bgMedium,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Outfit", "Sora", sans-serif',
    h1: {
      fontFamily: '"Clash Display", "Outfit", sans-serif',
      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      background: colors.gradientPrimary,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontFamily: '"Clash Display", "Outfit", sans-serif',
      fontSize: 'clamp(1.75rem, 5vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
      color: colors.textPrimary,
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: colors.textPrimary,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
      fontWeight: 500,
      color: colors.textSecondary,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: colors.textPrimary,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      color: colors.textSecondary,
    },
    body1: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: colors.textSecondary,
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: colors.textMuted,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          background: colors.bgCard,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});

export { colors };
export default theme;
