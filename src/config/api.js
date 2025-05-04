const API_BASE_URL = 'backend_tutam9.railway.internal'; 

// Helper function for handling API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    // Parse error message from response if possible
    try {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    } catch (e) {
      throw new Error(`Error: ${response.status}`);
    }
  }
  
  return response.json();
};

// Get All Todos (Read)
export const getAllTodos = async () => {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
};

// Update Todo (Update)
export const updateTodo = async (id, title, dueDate) => {
  const response = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, dueDate }),
  });

  return handleResponse(response);
};

// Delete Todo (Delete)
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
};

