//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";


const defaultTodos = [
  {
    text: 'Cortar Cebolla',
    completed: true
  },
  {
    text: 'Hacer Curso De React',
    completed: false
  },
  {
    text: 'Llorar con la Llorona',
    completed: false
  }
]
function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //esto filtra los ToDos que ya fueron realizados
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase(); //aca volvemos todo lo que escribamos en search en minuscula
      return todoText.includes(searchText); //aca preguntamos si lo que escribimos en 
      });
    
  }

  function completeTodo(text) {
    const todoIndex = todos.findIndex(todo => todo.text === text); //examinamos cada todo cual indice tiene exactamente el text
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; //agarra el indice correspondiente y le cambia el completed de false a true
    setTodos(newTodos);
    /*  todos[todoIndex] = {
       text : todos[todoIndex].text,
       completed: true,
     } */
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); 
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //aca agarra el elemento del index elegido, y elimina 1 
    setTodos(newTodos);
  }
  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}

    />
  )
}

export default App
