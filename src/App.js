import './App.css';
import React, { useState } from 'react';
import TaskList from './components/list';
import TaskForm from './components/form';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: taskIdCounter, ...newTask }]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

  return (
    // <div>
    //   <h1>Task Manager</h1>
    //   <TaskForm onAdd={addTask} />
    //   <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    // </div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={3} className="container">
          <Typography variant="h3" align="center" gutterBottom>
            Task Manager
          </Typography>
          <TaskForm onAdd={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
