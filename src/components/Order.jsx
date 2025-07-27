import React from 'react';
import {
  Paper, Typography, TextField, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Stack, Box
} from '@mui/material';

const MyOrders = () => {
  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Stack spacing={4} sx={{ width: '100%', maxWidth: 1000 }}>
        {/* Order Table */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>My Orders</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" mb={3}>
            <TextField placeholder="Search phone number" fullWidth />
            <Button variant="outlined">Export CSV</Button>
          </Stack>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>3245</TableCell>
                  <TableCell>0541234567</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell>MTN Data</TableCell>
                  <TableCell>2025-06-15</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Report Section */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>Report an Issue</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField label="Enter Order ID" placeholder="e.g., 3245" fullWidth />
            <Button variant="contained" sx={{ width: { xs: '100%', sm: '200px' } }}>
              Submit Report
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default MyOrders;
