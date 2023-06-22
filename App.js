import './App.css';
import { useState } from "react";
import Task from './Task'; // Assuming the default export is used in the Task component

function App() {
  const [toDOList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: toDOList.length === 0 ? 1 : toDOList[toDOList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...toDOList, task];
    setToDoList(newTodoList);
  }

  const deleteTask = (id) => {
    setToDoList(toDOList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1 id="x">TO-DO-LIST</h1>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDOList.map((task) => (
          <Task
            key={task.id} // Added key prop for each Task component
            taskName={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
