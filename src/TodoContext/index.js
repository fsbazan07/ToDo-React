import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext(); //provee providers y consumers


function TodoProvider (props) {
const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])


  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  //esto filtra los ToDos que ya fueron realizados
  //console.log(completedTodos);
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase(); //aca volvemos todo lo que escribamos en search en minuscula
      return todoText.includes(searchText);  
      });
  }


  function completeTodo(text) {
    const todoIndex = todos.findIndex(todo => todo.text === text); //examinamos cada todo cual indice tiene exactamente el text
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; //agarra el indice correspondiente y le cambia el completed de false a true
    saveTodos(newTodos);
  
     };

  function addTodo(text) {
    const newTodos = [...todos];
    newTodos.push(
      {
        completed: false,
        text,
      }
    )
    saveTodos(newTodos);
      };   
  

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); 
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //aca agarra el elemento del index elegido, y elimina 1 
    saveTodos(newTodos);
  }
  return (
      <TodoContext.Provider value = {{
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          addTodo,
          deleteTodo,
          openModal,
          setOpenModal,
      }}>
        {props.children}
      </TodoContext.Provider>
  );
    
}
 export { TodoContext, TodoProvider }
