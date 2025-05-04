  import { Trash2, Edit2 } from 'lucide-react';
  import React, { useState } from 'react';


  function TodoItem({ task, onDelete, onToggleComplete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.text);
    const [newDueDate, setNewDueDate] = useState(task.dueDate || ''); 

    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };

    const handleSaveEdit = () => {
      onEdit(task.id, newTitle, newDueDate); 
      setIsEditing(false);
    };

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
            {isEditing ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border border-gray-300 p-1 rounded-md"
              />
            ) : (
              task.text
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isEditing && (
            <input
              type="date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
              className="border border-gray-300 p-1 rounded-md"
            />
          )}
          <button onClick={() => (isEditing ? handleSaveEdit() : handleEditToggle())} className="text-gray-400 hover:text-blue-500">
            <Edit2 size={18} />
          </button>
          <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    );
  }

  export default TodoItem;
