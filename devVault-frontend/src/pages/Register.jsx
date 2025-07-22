import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import colors from '../styles/colors';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      setMessage("Registered successfully!");
      navigate('/login');
    } catch (err) {
      setMessage("Registration failed. Email may already exist.");
    }
  };

  return (
    <div style={{ background: colors.background, minHeight: '100vh', color: colors.text }}>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
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
          <button type="submit" style={styles.button}>Register</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    background: '#2D3748',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: colors.primary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #444',
    background: colors.surface,
    color: colors.text,
  },
  button: {
    background: colors.primary,
    color: colors.text,
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: colors.accent,
    textAlign: 'center',
  },
};

export default Register;
