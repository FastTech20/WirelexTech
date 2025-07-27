import React from 'react';
import {
  Box, Typography, TextField, Button, Paper, Stack
} from '@mui/material';

const MTNAFA = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: 2, // padding on small screens
        backgroundColor: '#f5f5f5', // optional background
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h5">AFA Registration</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Price: ₵5.00
        </Typography>

        <Stack spacing={3} mt={2}>
          <Typography variant="h6">Details for Registration</Typography>

          <TextField label="Full Name *" required fullWidth />
          <TextField label="Phone Number *" required fullWidth />
          <TextField label="Ghana Card ID *" required fullWidth />
          <TextField label="Location *" required fullWidth />
          <TextField label="AFA REG Quantity" type="number" defaultValue={1} fullWidth />

          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '150px', mt: 1 }}
            >
              Add to Cart
            </Button>
          </Box>

          <Typography variant="body2">WirelexTech: AFA</Typography>
          <Typography variant="body2">Category: MTN-AFA</Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MTNAFA;
