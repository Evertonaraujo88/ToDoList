import React from "react";
import "./TaskFilter.css";

// Componente TaskFilter: Input para filtrar as tarefas com base no texto digitado
const TaskFilter = ({ filterText, onFilterChange }) => {
  return (
    
      
      <input
        type="text"
        className="task-filter"
        placeholder="Procurar Tarefa" // Placeholder para o campo de filtro
        value={filterText} // Valor atual do filtro
        onChange={(e) => onFilterChange(e.target.value)} // Atualiza o filtro quando o texto muda
      />
    
  );
};

export default TaskFilter;
