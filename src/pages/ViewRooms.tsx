import React from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const ViewRooms = () => {
  // Sample room data (replace it with actual data)
  const roomsData = [
    { id: 1, imageSrc: "/path/to/room1.jpg", description: "Deluxe Room", price: "$150/night" },
    { id: 2, imageSrc: "/path/to/room2.jpg", description: "Executive Suite", price: "$200/night" },
    // Add more room data as needed
  ];

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Grid of Room Containers */}
        <Grid container spacing={4}>
          {roomsData.map((room) => (
            <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>
              {/* Make each room clickable */}
              <Link component={RouterLink} to={`/book-room/${room.id}`} style={{ textDecoration: 'none' }}>
                <Box sx={{ textAlign: 'center' }}>
                  {/* Room Image */}
                  <Avatar alt={room.description} src={room.imageSrc} sx={{ width: 150, height: 150, margin: 'auto' }} />
                  {/* Room Description */}
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {room.description}
                  </Typography>
                  {/* Room Price */}
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    {room.price}
                  </Typography>
                  {/* Add more details if needed */}
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ViewRooms;
