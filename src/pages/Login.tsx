import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

import '../styles/Login.css';
import Logo from '../logo.svg';

const auth = getAuth();


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigate('/edit');
        }
      });
      return unsubscribe;
    }, [navigate]);
  
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="login-page">
        <NavBar></NavBar>
        <div className="box">
          <center><img src={Logo} alt="Casual Entertainment Logo" className='loginLogo'/></center>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div className="inputBox">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ID"
                    required
                  />
              </div>
              <div className="inputBox">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Clave"
                    required
              />
              </div>
              <button className="loginbutton" type="submit" name="sign-in" value="Sign In">Acceder</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;