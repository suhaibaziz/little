import React from "react";
import { useState } from "react";
import{motion}from'framer-motion';
import { message } from 'antd';
import MotionCube from "./cube";
const Login=()=>{


    
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [usernameError, setUsernameError] = useState('');
      const [passwordError, setPasswordError] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
        message.success('Form submitted successfully!');
        setPassword('');
        setUsername('');
      };
    
      const validateForm = () => {
        setUsernameError('');
        setPasswordError('');
    
        if (username.trim() === '') {
          setUsernameError('Username is required.');
        }
    
        if (password.trim() === '') {
          setPasswordError('Password is required.');
        }
      };
    
      return (
        <div>
            <MotionCube/>
        <div className="login-container">
            
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {usernameError && <div className="error-message">{usernameError}</div>}
    
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <div className="error-message">{passwordError}</div>}
    
              <motion.button whileHover={{
  scale:1.2,
  textShadow:"0px 0px 8px rgb(255,255,255)",
  boxShadow:"0px 0px 8px rgb(255,255,255)",
 }} type="submit">Login</motion.button>
            </form>
          </div>
        </div>
        </div>
      );
    }
    
    export default Login;
    