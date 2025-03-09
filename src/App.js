// src/App.js
import React, {useState, useEffect} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = taskName => {
    const newTask = {name: taskName, completed: false}
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const toggleComplete = index => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const deleteTask = index => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Task Tracker</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
