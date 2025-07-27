import React from 'react';
import {
  Paper, Typography, TextField, Button, Stack, Link, Box, Container
} from '@mui/material';

const Support = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 5, boxShadow: 3, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Support
        </Typography>

        <Typography variant="subtitle1" align="center" color="text.secondary" mb={3}>
          We’re here to help. Fill out the form below and we’ll get back to you shortly.
        </Typography>

        <Stack spacing={3}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Email Address" type="email" fullWidth />
          <TextField label="Subject" fullWidth />
          <TextField label="Message" multiline rows={4} fullWidth />
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" sx={{ width: 160 }}>
              Submit Request
            </Button>
          </Box>
        </Stack>

        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Other ways to reach us
          </Typography>
          <Typography>📧 Email: <Link href="mailto:support@example.com">support@example.com</Link></Typography>
          <Typography>📞 Phone: +233 242 975 483</Typography>
          <Typography>⏰ Support Hours: Mon - Fri, 9 AM - 5 PM</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Support;
