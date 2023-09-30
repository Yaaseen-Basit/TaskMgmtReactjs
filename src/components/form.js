// import React, { useState } from 'react';
// import Button from './ButtonStyled';
// // import tasks from './data/task';

// function TaskForm({ onAdd }) {
//   const [newTask, setNewTask] = useState('');

//   const handleAddClick = () => {
//     onAdd({ text: newTask });
//     setNewTask('');
//   };

//   return (
//     <div>
//       <h2>Add Task</h2>
//       <input
//         type="text"
//         placeholder="Task name"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <Button onClick={handleAddClick}>Add</Button>
//     </div>
//   );
// }

// export default TaskForm;
import React, { useState } from 'react';
import Button from './ButtonStyled';
import tasks from '../data/tasks';
function TaskForm({ onAdd }) {
  const [newTask, setNewTask] = useState('');

  const handleAddClick = () => {
    const updatedTasks = tasks.map((task) => ({ ...task })); // Create a deep copy of the tasks array
    const newTaskObject = { id: Date.now(), text: newTask, completed: false };
    updatedTasks.push(newTaskObject);
  
    // Update the tasks array with the deep copy
    tasks.length = 0;
    tasks.push(...updatedTasks);
  
    onAdd({ text: newTask });
    setNewTask('');
  };
  
  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button onClick={handleAddClick}>Add</Button>
      {/* <div>
        <h2>Saved Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div> */}
    </div>
    
  );
}

export default TaskForm;

