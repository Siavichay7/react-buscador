import React from "react";
import "./App.css";
import { Todo } from "../models/todo";

// PRIME NG
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { Card } from "primereact";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";
// const defaultTodos: Todo[] = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a react', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Llorar con la ssss', completed: false},
// ]

export const App = () => {
  // ACCESO A LAS PROPIEDADES DEL CONTEXT (VALUE) CON EL HOOK useContext
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <Card className="container">
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText: String) => (
            <p>No hay resultados de la busqueda para {searchText}</p>
          )}
          render={(todo: any) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />
        {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </Card>
    </React.Fragment>
  );
};

export default App;
