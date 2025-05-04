import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, setTasks }) {
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEditTask = async (taskId, newTitle, newDueDate) => {
    try {
      await updateTodo(taskId, newTitle, newDueDate);
      setTasks(tasks.map((task) =>
        task.id === taskId ? { ...task, text: newTitle, dueDate: newDueDate } : task
      ));
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            task={task} 
            onDelete={handleDeleteTask} 
            onToggleComplete={handleToggleComplete} 
            onEdit={handleEditTask}  
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TodoList;
