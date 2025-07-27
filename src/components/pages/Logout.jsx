import React, { useEffect } from 'react';
import { Typography, Container, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage or backend tokens
    localStorage.removeItem('token');

    // Update auth state in App.jsx
    if (onLogout) onLogout();

    // Redirect to login page after short delay
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, onLogout]);

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>
          You have been logged out
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Redirecting you to the login page...
        </Typography>
        <CircularProgress color="primary" />
      </Box>
    </Container>
  );
};

export default Logout;
