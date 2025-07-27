
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const cardStyle = {
    p: 3,
    borderRadius: 4,
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 2,
    boxShadow: 6,
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflowY: 'hidden', // Remove scrollbar
        background: 'linear-gradient(to right, #e3f2fd, #ffffff)', // Light blue to white
        py: 6,
        px: 3,
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          fontWeight="bold"
          gutterBottom
        >
          Welcome,{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Felix
          </Box>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here’s a snapshot of your account performance
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        direction={isMobile ? 'column' : 'row'}
        alignItems="stretch"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <AccountBalanceWalletIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="subtitle1" color="text.secondary">
              Current Balance
            </Typography>
            <Typography variant="h6" fontWeight="bold">₵0.00</Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/wallet')}
            >
              Top Up
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <ShoppingCartIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
            <Typography variant="subtitle1" color="text.secondary">
              Total Orders
            </Typography>
            <Typography variant="h6" fontWeight="bold">0</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <AttachMoneyIcon sx={{ fontSize: 40, color: 'success.main' }} />
            <Typography variant="subtitle1" color="text.secondary">
              Total Sales
            </Typography>
            <Typography variant="h6" fontWeight="bold">GH₵ 0.00</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <MonetizationOnIcon sx={{ fontSize: 40, color: 'warning.main' }} />
            <Typography variant="subtitle1" color="text.secondary">
              Current Commission
            </Typography>
            <Typography variant="h6" fontWeight="bold">GH₵ 0.00</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
