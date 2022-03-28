import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';


function AppUI({
    loading, 
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }) {

    return (
            <React.Fragment>
              <TodoCounter
                total={totalTodos}
                completed={completedTodos}
        
              />
        
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
        
              <CreateTodoButton />
              <TodoList>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo!</p>}
                

                {searchedTodos.map(todo => (
        
                  <TodoItem
        
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
        
                  />
                ))}
                
              </TodoList>
        
        
            </React.Fragment>
          );
        }
export { AppUI };
