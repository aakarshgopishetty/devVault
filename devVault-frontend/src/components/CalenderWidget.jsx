import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderWidget.css';

function CalendarWidget({ tasks }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.createdAt);
    return (
      taskDate.toDateString() === selectedDate.toDateString()
    );
  });

  return (
    <div className="calendarWidget">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <h4>Tasks on {selectedDate.toDateString()}:</h4>
      {filteredTasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {filteredTasks.map(task => (
            <li key={task._id}>
              <strong>{task.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CalendarWidget;
