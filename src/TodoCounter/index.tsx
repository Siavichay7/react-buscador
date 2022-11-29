import React from "react";
import "./TodoCounter.css";

export const TodoCounter = ({ totalTodos, completedTodos }: any) => {
  return (
    <h2 className="texto">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
