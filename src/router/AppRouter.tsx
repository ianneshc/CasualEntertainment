import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import { auth } from '../firebase';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

interface PrivateRouteProps {
  element: React.ReactNode;
}

/*
const PrivateRoute = ({ element: Component, ...rest }: PrivateRouteProps) => {
  const user = auth.currentUser;
  return user ? <>{Component}</> : <Navigate to="/login" />;
};
*/

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*<Route path="/" element={<PrivateRoute element={<HomePage />} />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;