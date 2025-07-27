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

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const defaultUser = {
      username: 'admin',
      email: 'felixo6996@gmail.com',
      password: 'admin123'
    };

    if (
      formData.username === defaultUser.username &&
      formData.email === defaultUser.email &&
      formData.password === defaultUser.password
    ) {
      alert('Signup successful! Please log in.');
      navigate('/login');
    } else {
      alert('Signup failed. Please use the default credentials:\nUsername: admin\nEmail: felixo6996@gmail.com\nPassword: admin123');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8', p: 2 }}>
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required margin="normal" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, py: 1.5 }}>
              Create Account
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;