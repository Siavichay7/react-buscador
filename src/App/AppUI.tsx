import { Card } from "primereact"
import React from "react"
import { CreateTodoButton } from "../CreateTodoButton"
import { Todo } from "../models/todo"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"

export const AppUI = ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}:any) => {
    return(
        <React.Fragment>
      <Card className='container'>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>

          {error && <p>Desesperate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes</p>}
          {(!loading && !searchedTodos.length) && <p>
            ¡Crea tu primer TODO!
            </p>}

          {searchedTodos.map((todo: Todo) =>       
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)} 
          onDelete={() => deleteTodo(todo.text)}
          />
          )}
        </TodoList>
        <CreateTodoButton/>
      </Card> 
    </React.Fragment>
    )
}