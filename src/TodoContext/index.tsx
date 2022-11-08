import React from "react";
import { Todo } from "../models/todo";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext({} as any);

export const TodoProvider = (props:any) => {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error} 
        = useLocalStorage('TODOS_V1', [])
      const [searchValue, setSearchValue] = React.useState('');
      const completedTodos = todos.filter((todo: Todo) => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos: Todo[] = [];
      if (searchValue.length <= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo: Todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodo = (text: string) => {
        const todoIndex = todos.findIndex((todo: Todo) => todo.text === text);
        // COPIA DE TODOS
        const newTodos = [...todos];
        todos[todoIndex].completed = true;
        console.log(todos)
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text: string) => {
        const todoIndex = todos.findIndex((todo: Todo) => todo.text === text);
        // COPIA DE TODOS
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


