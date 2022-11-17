import React from "react";
import { TodoContext } from "../TodoContext";

export const TodosError = () => {
  const { error } = React.useContext(TodoContext);

  return (
    <div>
      <h1>Ups! Algo salió mal</h1>
    </div>
  );
};
