// src/pages/AirtelTigo.jsx
import React from 'react';
import {
  Box,
  Typography,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Stack,
} from '@mui/material';

const AirtelTigo = () => {
  const [packageValue, setPackageValue] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={2} // padding for smaller screens
    >
      <Paper
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400, // Keeps it responsive on larger screens
        }}
        elevation={3}
      >
        <Typography variant="h5" gutterBottom>
          AirtelTigo Data Bundles
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          ₵3.90 – ₵210.00
        </Typography>

        <Stack spacing={3}>
          <FormControl fullWidth>
            <InputLabel>Package</InputLabel>
            <Select
              value={packageValue}
              label="Package"
              onChange={(e) => setPackageValue(e.target.value)}
            >
              <MenuItem value="3.90">₵3.90 - 300MB</MenuItem>
              <MenuItem value="10">₵10 - 1GB</MenuItem>
              <MenuItem value="20">₵20 - 2.5GB</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="AirtelTigo Quantity"
            type="number"
            fullWidth
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: 150,
              }}
            >
              Add to Cart
            </Button>
          </Box>

          <Typography variant="body2">
            <strong>SKU:</strong> iShare
          </Typography>
          <Typography variant="body2">
            <strong>Category:</strong> AirtelTigo
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AirtelTigo;
