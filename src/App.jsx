import { useState } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the PLP Task Manager</h1>

        <div className="mb-6">
          <Button label="Click Me" onClick={() => setCount(count + 1)} />
          <p className="mt-2">You clicked {count} times</p>
        </div>

        <TaskManager />
      </main>

      <Footer />
    </div>
  );
}

export default App;
