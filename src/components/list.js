import React from 'react';
import TaskItem from './item';
import { List, Typography } from '@mui/material';

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </List>
    </div>
  );
}

export default TaskList;
