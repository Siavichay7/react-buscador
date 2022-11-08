import { Card } from "primereact"
import React from "react"
import { CreateTodoButton } from "../CreateTodoButton"
import { Todo } from "../models/todo"
import { TodoContext } from "../TodoContext"
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
        <TodoCounter/>
        <TodoSearch/>
        <TodoContext.Consumer>
          {({error, loading, searchedTodos, completeTodo, deleteTodo}) => (
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButton/>
      </Card> 
    </React.Fragment>
    )
}