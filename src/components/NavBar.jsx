import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItemButton,
  ListItemText, Box, useTheme, useMediaQuery, Button, Divider, ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WifiIcon from '@mui/icons-material/Wifi';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SimCardIcon from '@mui/icons-material/SimCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { name: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { name: 'MTN', path: '/mtn-data', icon: <WifiIcon /> },
  { name: 'AirtelTigo', path: '/airtel-tigo', icon: <SimCardIcon /> },
  { name: 'Telecel', path: '/telecel', icon: <SimCardIcon /> },
  { name: 'MTN AFA', path: '/mtn-afa', icon: <AssignmentIcon /> },
  { name: 'My Orders', path: '/orders', icon: <AssignmentIcon /> },
  { name: 'Support', path: '/support', icon: <SupportAgentIcon /> },
];

const NavBar = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo Header */}
      <Box sx={{ bgcolor: '#1976d2', py: 3, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          WirelexTech
        </Typography>
      </Box>

      {/* Navigation List */}
      <List sx={{ flexGrow: 1, bgcolor: '#1e1e2f' }}>
        {navItems.map(({ name, path, icon }) => (
          <ListItemButton
            key={name}
            component={Link}
            to={path}
            selected={location.pathname === path}
            sx={{
              color: location.pathname === path ? '#1976d2' : '#fff',
              bgcolor: location.pathname === path ? '#fff' : 'inherit',
              '&:hover': { bgcolor: '#2e2e42' },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        ))}
      </List>

      {/* Action Buttons */}
      <Divider />
      <Box sx={{ p: 2, bgcolor: '#1e1e2f' }}>
        <Button
          fullWidth
          component={Link}
          to="/login"
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{
            mb: 1,
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#115293' }
          }}
        >
          Login
        </Button>
        <Button
          fullWidth
          component={Link}
          to="/signup"
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            mb: 1,
            color: '#fff',
            borderColor: '#1976d2',
            '&:hover': {
              borderColor: '#fff',
              bgcolor: '#1976d2',
              color: '#fff'
            }
          }}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          component={Link}
          to="/logout"
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top AppBar (Mobile Only) */}
      {isMobile && (
        <AppBar position="fixed" color="primary" elevation={4} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', flexGrow: 1 }}>
              WirelexTech
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar Drawer */}
      <Box component="nav">
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: '#1e1e2f',
              color: '#fff',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          mt: { xs: 7, md: 0 },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default NavBar;
