import React from 'react';
import {
  Paper, Typography, TextField, Button, Stack, Divider, Link
} from '@mui/material';

const TopUp = () => {
  return (
    <Stack spacing={4}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6">Self Top-up</Typography>
        <TextField label="Enter Amount (GH₵)" type="number" fullWidth sx={{ my: 2 }} />
        <Typography variant="body2">Click on "I've completed this payment" when done.</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Top Up Wallet Now</Button>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6">Manual Wallet Top up</Typography>
        <Typography><strong>📱 Number:</strong> 0242975483</Typography>
        <Typography><strong>👤 Name:</strong> Felix Owusu</Typography>
        <Typography><strong>💬 Reference:</strong> Use your username as the payment reference</Typography>
        <Typography><strong>💵 Minimum Deposit:</strong> GH₵10</Typography>
        <Typography color="text.secondary" mt={2}>
          Once payment is made, your wallet will be credited after confirmation. Ensure the reference matches your username to avoid delays.
        </Typography>
        <Link href="#" underline="hover">📩 Report Top-Up Delay</Link>
      </Paper>
    </Stack>
  );
};

export default TopUp;
