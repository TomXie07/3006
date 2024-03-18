import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ViewRooms from './pages/ViewRooms'; 
import BookRooms from './pages/BookRoom'; 

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-rooms" element={<ViewRooms />} />
        <Route path="/book-room/:roomId" element={<BookRooms />} />
      </Routes>
    </>
  );
}

export default App;
 