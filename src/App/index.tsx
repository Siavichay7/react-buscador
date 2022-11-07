import React from 'react';
import './App.css';
import { Todo } from '../models/todo';

// PRIME NG 
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";     
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos: Todo[] = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a react', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Llorar con la ssss', completed: false},
// ]

export const App = () => {
  return (
    <TodoProvider>
          <AppUI/>
    </TodoProvider>
  );
}

