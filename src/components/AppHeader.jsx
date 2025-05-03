import { CheckCircle } from 'lucide-react';

function AppHeader() {
  return (
    <header className="flex items-center mb-6">
      <CheckCircle className="text-emerald-500 w-6 h-6 mr-2" />
      <div>
        <h1 className="text-xl font-semibold text-gray-800">TaskMaster</h1>
        <p className="text-sm text-gray-500">Organize your tasks with ease</p>
      </div>
    </header>
  );
}

export default AppHeader;