import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm.jsx';
import AppHeader from './components/AppHeader.jsx';
import TodoList from './components/TodoList.jsx';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [loadError, setLoadError] = useState('');

  // Main App Layout
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center pt-12">
      <div className="w-full max-w-md">
        {currentPage === 'home' ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <AppHeader />
            
            <AddTodoForm 
              tasks={tasks}
              setTasks={setTasks}
              error={error}
              setError={setError}
            />
            
            {loadError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {loadError}
              </div>
            )}
            
            <TodoList 
              tasks={tasks}
              setTasks={setTasks}
            />
            
            <footer className="mt-6 pt-4 border-t border-gray-100 text-center">
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-sm text-emerald-500 hover:underline"
              >
                About TaskMaster
              </button>
            </footer>
          </div>
        ) : currentPage === 'about' ? (
          <About navigateTo={setCurrentPage} />
        ) : null}
      </div>
    </div>
  );
}

// About Component - Simple About Page
function About({ navigateTo }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">About TaskMaster</h1>
      <p className="mb-4">TaskMaster is a simple task management application to help you organize your daily tasks with ease.</p>
      <p className="mb-4">Features:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Create new tasks</li>
        <li>Mark tasks as complete</li>
        <li>Delete tasks</li>
        <li>Persistent storage using localStorage</li>
      </ul>
      <div className="text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center justify-center mx-auto text-emerald-500 hover:underline"
        >
          Back to Tasks
        </button>
      </div>
    </div>
  );
}

export default App;