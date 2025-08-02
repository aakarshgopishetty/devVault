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
        name, email, password
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
        <h2 style={styles.heading}>Create Your Account</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
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
    margin: '60px auto',
    padding: '24px',
    background: colors.surface,
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: colors.primary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: `1px solid ${colors.accent}`,
    background: '#fdfdfd',
    color: colors.text,
    fontSize: '15px',
  },
  button: {
    background: colors.primary,
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
  },
  message: {
    marginTop: '12px',
    color: colors.danger,
    textAlign: 'center',
  },
};

export default Register;
