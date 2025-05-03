import { Trash2 } from 'lucide-react';

function TodoItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="mr-3 h-4 w-4 text-emerald-500 rounded focus:ring-emerald-500"
        />
        <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {task.text}
        </span>
      </div>
      <button 
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default TodoItem;