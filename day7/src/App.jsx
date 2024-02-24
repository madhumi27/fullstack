import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Course from './Pages/User/Course';
import Profile from './Pages/User/Profile';
import Academy from './Pages/User/Academy';
import AddCourse from './Pages/Admin/AddCourse';
import UserDetails from './Pages/Admin/UserDetails';
import CreateAcademy from './Pages/Admin/CreateAcademy';
import Contact from './Pages/Contact';
import AcademyCourses1 from './Pages/User/AcademyCourses';
import AcademyDetails from './Pages/Admin/AcademyDetails';
import CourseDetails from './Pages/Admin/CourseDetails';
import AdminProfile from './Pages/Admin/AdminProfile';
import CourseEdit from './Pages/Admin/CourseEdit';
import CourseUsers from './Pages/Admin/CourseUsers';
import AcademyEdit from './Pages/Admin/AcademyEdit';
import AcademyCourses2 from './Pages/Admin/AcademyCourses';
import TermsAndConditions from './Pages/TermsAndConditions';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/course" element={<Course />} />
          <Route path="/user/academy" element={<Academy />} />
          <Route path="/user/academy/courses" element={<AcademyCourses1 />} />
          <Route path="/user/profile" element={ <Profile user={user} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create-academy" element={<CreateAcademy />} />
          <Route path="/admin/add-course" element={<AddCourse/>} />
          <Route path="/admin/user-details" element={<UserDetails/>} />
          <Route path="/admin/academy-details" element={<AcademyDetails />} />
          <Route path="/admin/course-details" element={<CourseDetails />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/course/edit" element={<CourseEdit />} />
          <Route path="/admin/courses/users" element={<CourseUsers />} />
          <Route path="/admin/academy/edit" element={<AcademyEdit />} />
          <Route path="/admin/academy/courses" element={<AcademyCourses2 />} />
         
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
