import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Dashboard.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Please log in to view your tasks');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(res.data);
      setMessage('');
    } catch (err) {
      setMessage('Failed to load tasks');
    }
  };

  const createTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setTitle('');
      setDescription('');
      fetchTasks(); // Refresh the list after creating
    } catch (err) {
      setMessage('Failed to create task');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

    return (
      <div>
        <Navbar />
        <div className="dashboard-container">
          <h2>Dashboard</h2>
          <form onSubmit={createTask}>
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>

          {message && <p>{message}</p>}

          <ul>
            {tasks.map((task) => (
              <li key={task._id}>
                <strong>{task.title}</strong>: {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default Dashboard;
