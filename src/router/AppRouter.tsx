import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Hub from '../pages/Hub';
import ContactSuccess from '../pages/ContactSuccess';
import { getAuth } from 'firebase/auth';
import Login from '../pages/Login';
import '../firebase';

const auth = getAuth();


interface PrivateRouteProps {
  element: React.ReactNode;
}


const PrivateRoute = ({ element: Component, ...rest }: PrivateRouteProps) => {
  const user = auth.currentUser;
  return user ? <>{Component}</> : <Navigate to="/bonjour" />;
};


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bonjour" element={<Login />} />
        <Route path="/success" element={<ContactSuccess />} />
        <Route path="/hub" element={<PrivateRoute element={<Hub />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;