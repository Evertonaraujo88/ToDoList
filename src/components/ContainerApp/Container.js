import React, { useState } from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import "./Container.css";

// Componente Container: Envolve os componentes principais da aplicação e gerencia o estado da lista de tarefas
const Container = () => {
  const [tasks, setTasks] = useState([
    { description: "Estudar React", completed: false },
    { description: "Ler um livro", completed: false },
  ]);

  const [filterText, setFilterText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (description) => {
    setTasks([...tasks, { description, completed: false }]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].description = newDescription;
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <Header /> {/* Componente do cabeçalho */}
      <TaskFilter filterText={filterText} onFilterChange={setFilterText} />{" "}
      {/* Componente do filtro de tarefas */}
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
        onToggle={handleToggleTask}
      />
      <div className="container-button">
        <button onClick={() => setShowModal(true)}>Nova Tarefa</button>{" "}
        {/* Botão para abrir o modal de adicionar tarefa */}
      </div>
      {showModal && (
        <AddTaskModal
          onAddTask={handleAddTask}
          onClose={() => setShowModal(false)}
        />
      )}{" "}
      {/* Exibe o modal se o estado showModal for true */}
    </div>
  );
};

export default Container;
