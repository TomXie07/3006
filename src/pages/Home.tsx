import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        // Redirect to the Login page after 5 seconds
        navigate('/login');
      }, 5000);
  
      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div>Home</div>
    )
}

export default Home