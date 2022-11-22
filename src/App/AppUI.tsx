import { Card } from "primereact";
import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { Todo } from "../models/todo";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

export const AppUI = () => {
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
  } = React.useContext(TodoContext);
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
        <TodoList>
          {error && <TodosError></TodosError>}
          {loading && <TodosLoading></TodosLoading>}
          {!loading && !searchedTodos.length && <EmptyTodos></EmptyTodos>}

          {searchedTodos.map((todo: Todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton />
      </Card>
    </React.Fragment>
  );
};
