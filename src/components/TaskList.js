// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
          className={task.fadeIn ? 'fade-in' : ''}
        />
      ))}
    </div>
  );
};

export default TaskList;