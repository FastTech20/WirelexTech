import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },     // Blue
    secondary: { main: '#6a1b9a' },   // Purple (Login)
    error: { main: '#d32f2f' },       // Red (Logout)
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default Theme;
