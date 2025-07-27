import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid
} from '@mui/material';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const defaultUser = {
      email: 'felixo6996@gmail.com',
      password: 'admin123'
    };

    if (
      formData.email === defaultUser.email &&
      formData.password === defaultUser.password
    ) {
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please use the correct login info.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8', p: 2 }}>
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ mb: 3 }}>
            Enter your credentials to continue
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required margin="normal" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}>
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;