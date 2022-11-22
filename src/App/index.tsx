import React from "react";
import "./App.css";
import { Todo } from "../models/todo";

// PRIME NG
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos: Todo[] = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a react', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Llorar con la ssss', completed: false},
// ]

// export const App = () => {
//   return (
//     <TodoProvider>
//           <AppUI/>
//     </TodoProvider>
//   );
// }

export const App = () => {
  const [todos, setTodos] = React.useState("estado compartido");

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={todos} />
      </TodoList>
    </React.Fragment>
  );
};

export const TodoHeader = ({ children }: any) => {
  return <header>{children}</header>;
};

export const TodoList = ({ children }: any) => {
  return <section className="TodoList-container">{children}</section>;
};

export const TodoCounter = () => {
  return <p>TodoCounter</p>;
};

export const TodoSearch = () => {
  return <p>TodoSearch</p>;
};

export const TodoItem = ({ state }: any) => {
  return <p>TodoItem: {state}</p>;
};

export default App;
