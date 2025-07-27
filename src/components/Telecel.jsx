// src/pages/Telecel.jsx
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

const Telecel = () => {
  const [packageValue, setPackageValue] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      px={2} // padding on small screens
    >
      <Paper sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Telecel Data Bundles
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
              <MenuItem value="5">₵5 - 400MB</MenuItem>
              <MenuItem value="10">₵10 - 1.2GB</MenuItem>
              <MenuItem value="20">₵20 - 3GB</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Telecel Quantity"
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
                width: '150px',
              }}
            >
              Add to Cart
            </Button>
          </Box>

          <Typography variant="body2">
            <strong>SKU:</strong> Telecel-Data
          </Typography>
          <Typography variant="body2">
            <strong>Category:</strong> Telecel
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Telecel;
