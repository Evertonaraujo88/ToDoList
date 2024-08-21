import React from 'react';
import './Header.css';

// Componente Header: Exibe o título e a data atual no cabeçalho
const Header = () => {
  const today = new Date(); // Cria uma nova data com a data e hora atuais
  const options = { weekday: 'long', month: 'long', day: 'numeric' }; // Define o formato da data (dia da semana, dia, mês)
  const date = today.toLocaleDateString('pt-BR', options); // Converte a data para o formato brasileiro com as opções definidas

  return (
    <header className="header">
      
      <h1>{date}</h1> {/* Exibe a data formatada */}
    </header>
  );
};

export default Header;
