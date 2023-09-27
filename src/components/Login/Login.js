import React, { useState } from 'react';
import { validateLogin } from '../../utils/validation';  // Import the validation function

const Login = (props) => {
  // Sample credentials for validation
  const SAMPLE_USERNAME = 'admin';
  const SAMPLE_PASSWORD = 'password123';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateLogin(username, password);  // Use the validation function
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (username === SAMPLE_USERNAME && password === SAMPLE_PASSWORD) {
        console.log('Logged in!');
      } else {
        setErrors({
          general: 'Invalid credentials. Please try again.',
        });
      }
    }
  };

 return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {errors.general && <p>{errors.general}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
