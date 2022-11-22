import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export const TodoCounter = ({ totalTodos, completedTodos }: any) => {
  const {} = React.useContext(TodoContext);
  return (
    <h2 className="texto">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
