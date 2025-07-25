import { Link, useNavigate } from 'react-router-dom';
import colors from '../styles/colors';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>DevVault</h2>
      <div style={styles.links}>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.primary,
    color: colors.text,
    padding: '12px 24px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: colors.surface,
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    transition: 'background 0.2s',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: colors.danger,
    color: colors.text,
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }
};

export default Navbar;
