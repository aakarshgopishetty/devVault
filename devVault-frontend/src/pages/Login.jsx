import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import colors from '../styles/colors';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      },{
      headers: {
        'Content-Type': 'application/json'
        }
      });

      localStorage.setItem('token', res.data.token);
      setMessage("Logged in successfully!");
      navigate('/dashboard');
    } catch (err) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.heading}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
          {message && <p style={styles.message}>{message}</p>}
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
  },
  form: {
    background: colors.backgroundLight,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
  },
  heading: {
    marginBottom: '20px',
    color: colors.primary,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    background: `${colors.accent}`,
    border: `1px solid ${colors.bordor}`,
    outline: 'none',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: colors.primary,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  message: {
    marginTop: '12px',
    textAlign: 'center',
    color: colors.danger,
  }
};

export default Login;