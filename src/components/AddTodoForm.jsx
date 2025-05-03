import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

function AddTodoForm({ tasks, setTasks, error, setError }) {
  const [inputValue, setInputValue] = useState('');

  // Save tasks to storage when changed
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Load tasks from storage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (e) {
        // Error handling managed in App.jsx
      }
    }
  }, [setTasks]);

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      setError('Failed to add todo. Please try again.');
      return;
    }
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
    setError('');
  };

  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tugas"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button 
          onClick={handleAddTask}
          className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <Plus size={20} />
        </button>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}

export default AddTodoForm;