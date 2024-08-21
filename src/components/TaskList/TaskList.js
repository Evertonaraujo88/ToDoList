import React from "react";
import "./TaskList.css";

// Componente TaskList: Exibe a lista de tarefas com opções de marcar como completa, editar ou excluir
const TaskList = ({ tasks, onDelete, onEdit, onToggle }) => {
  return (
    <ul className="task-list">
      {tasks.map(
        (
          task,
          index // Mapeia cada tarefa para um item da lista
        ) => (
          <li key={index} className="task-item">
            <div>
               <input
              type="checkbox"
              checked={task.completed} // Marca o checkbox se a tarefa estiver concluída
              onChange={() => onToggle(index)} // Alterna o estado de conclusão da tarefa
            />
            <span className={task.completed ? "completed" : ""}>
              {task.description}
            </span>{" "}
            {/* Exibe a descrição da tarefa, com um estilo diferente se estiver completa */}
            </div>
           
            <div>
              <button onClick={() => onEdit(index)}>✏️</button>{" "}
              {/* Botão para editar a tarefa */}
              <button onClick={() => onDelete(index)}>🗑️</button>{" "}
              {/* Botão para excluir a tarefa */}
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default TaskList;
