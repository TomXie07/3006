import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid, AppBar, Toolbar } from "@mui/material";
import { useParams } from 'react-router-dom';

const BookRooms = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`/api/rooms/${roomId}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }

        const fetchedRoom = await response.json();
        setRoomDetails(fetchedRoom);
      } catch (error) {
        console.error(error);
        // Handle error (show an error message, redirect, etc.)
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  const handlePayment = () => {
    // Handle payment logic
    console.log("Processing payment...");
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hotel Room Booking System
          </Typography>
        
        </Toolbar>
      </AppBar>

     
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Room Details */}
          {roomDetails && (
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Avatar alt={roomDetails.description} src={roomDetails.imageSrc} sx={{ width: 150, height: 150, margin: 'auto' }} />
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {roomDetails.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {roomDetails.price}
                </Typography>
                
              </Grid>
            </Grid>
          )}

          {/* Booking Form */}
          <form>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
            />
            {/* Add more form fields as needed */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePayment}
            >
              Pay Now
            </Button>
          </form>

          {/* Your existing content goes here */}
        </Box>
      </Container>
    </>
  );
}

export default BookRooms;
