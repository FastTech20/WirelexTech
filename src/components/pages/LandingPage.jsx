// LandingPage.js
import React from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          p: isMobile ? 3 : 6,
          borderRadius: 4,
          width: isMobile ? '100%' : '50%',
          maxWidth: '600px',
          boxShadow: 3,
        }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={700} gutterBottom>
          Fast & Affordable Internet Bundles
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Buy your internet bundle in seconds. Secure, easy and fast. No stress—just instant data!
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ px: 5, py: 1.5, borderRadius: 3, fontWeight: 'bold' }}
          onClick={() => navigate('/signup')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
