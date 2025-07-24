import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Dashboard.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

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
      fetchTasks();
    } catch (err) {
      setMessage('Failed to create task');
    }
  };

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };

  const saveTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {
          title: editedTitle,
          description: editedDescription
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setEditingTaskId(null);
      fetchTasks();
    } catch (err) {
      console.error('Edit failed:', err.response?.data || err.message);
      setMessage('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchTasks();
    } catch (err) {
      console.error('Delete failed:', err.response?.data || err.message);
      setMessage('Failed to delete task');
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
            <li key={task._id} className="task-item">
              {editingTaskId === task._id ? (
                <div className="task-edit">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="task-input"
                  />
                  <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="task-input"
                  />
                  <div className="task-buttons">
                    <button onClick={() => saveTask(task._id)} className="btn primary">Save</button>
                    <button onClick={() => setEditingTaskId(null)} className="btn">Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="task-details">
                    <strong>{task.title}</strong>
                    <p>{task.description}</p>
                  </div>
                  <div className="task-buttons">
                    <button onClick={() => startEdit(task)} className="btn primary">Edit</button>
                    <button onClick={() => deleteTask(task._id)} className="btn danger">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
