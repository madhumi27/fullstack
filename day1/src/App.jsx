import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import User from './Pages/User/User';
import Profile from './Pages/User/Profile';
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  // other user data
};
function App() {

  return (
    <Router>
      <div>
        {/* Your navigation components can go here if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/profile" element={ <Profile user={user} />} />
         
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
