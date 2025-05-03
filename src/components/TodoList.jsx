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

  return (
    <div className="space-y-2">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            onDelete={handleDeleteTask} 
            onToggleComplete={handleToggleComplete} 
          />
        ))
      ) : (
        <p className="text-gray-500 text-center py-6">You have no tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default TodoList;