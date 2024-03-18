import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
import ViewRooms from './ViewRooms'; // Import the component for View Rooms

const Dashboard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const toggleDrawer = (open : any ) => (event : any ) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleViewRooms = () => {
    setShowButtons(false);
  }

  const handleBookRooms = () => {
    // Handle booking logic if needed
  }

  const handleWallet = () => {
    // Handle wallet logic if needed
  }

  const handleHome = () => {
    setShowButtons(true);
  }

  return (
    <div>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <MenuIcon onClick={toggleDrawer(true)} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hotel Room Booking System
          </Typography>
          {/* Add more AppBar components or icons here */}
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button key="Home" onClick={handleHome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* Add more sidebar items as needed */}
        </List>
      </Drawer>

      {/* Main Content */}
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Three Big Buttons or ViewRooms */}
          {showButtons ? (
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleViewRooms}>
                  <Avatar alt="Button 1" src="/path/to/image1.jpg" sx={{ marginRight: 1 }} />
                  <Typography>View Rooms</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleBookRooms}>
                  <Avatar alt="Button 2" src="/path/to/image2.jpg" sx={{ marginRight: 1 }} />
                  <Typography>Book Rooms</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleWallet}>
                  <Avatar alt="Button 3" src="/path/to/image3.jpg" sx={{ marginRight: 1 }} />
                  <Typography>Wallet</Typography>
                </Button>
              </Grid>
            </Grid>
          ) : (
          
            <ViewRooms />
          )}

          {/* Your existing content goes here */}
        </Box>
      </Container>
    </div>
  );
}

export default Dashboard;
