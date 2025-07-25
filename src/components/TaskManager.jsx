import { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">My Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addTask}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="mb-1 flex justify-between">
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
