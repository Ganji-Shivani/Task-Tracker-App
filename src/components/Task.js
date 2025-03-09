// src/components/Task.js
import React from 'react'

const Task = ({task, toggleComplete, deleteTask}) => {
  return (
    <div
      onClick={toggleComplete}
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        transition: '0.3s',
      }}
    >
      {task.name}
      <button onClick={deleteTask} style={{marginLeft: '10px'}}>
        Finished
      </button>
    </div>
  )
}

export default Task
