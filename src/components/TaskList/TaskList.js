import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onEdit, onToggle }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task-item ${task.completed ? "task-completed" : ""}`} //ternário para troca de fundo quando estiver checked
        >
          <div className="task-div">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(index)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.description}
            </span>
          </div>
          <div className="task-div">
            <button onClick={() => onEdit(index)}>✏️</button>
            <button onClick={() => onDelete(index)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
