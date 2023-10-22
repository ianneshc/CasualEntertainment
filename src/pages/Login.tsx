import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css';
import Logo from '../logo.svg';

import NavBar from '../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/hub');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = auth.currentUser;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <NavBar></NavBar>
      <div className="box">
        <center><img src={Logo} alt="CDHub Logo" className='logo'/></center>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="inputBox">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo"
                  required
                />
            </div>
            <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
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