//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";


/* const defaultTodos = [
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
] */

function useLocalStorage(itemName, InitialValue){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(InitialValue);

  React.useEffect(() => {
    setTimeout(()=> { 
      try { 
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(InitialValue));
            parsedItem = InitialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
          setError(error);
        }
        }, 1000);
    });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }
      catch (error){
      setError(error);
      }
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])


/*   const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos) 
  }*/
  
  //const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

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

 /*  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos); //vuelve como string mi array
    localStorage.setItem('TODOS_V1', stringifiedTodos);//guarda lo anterior en en Todos v1 
    //queremos que se vea la informacion correcta y evitar que se recargue la paginar ->
    setTodos(newTodos);
  }; */
  function completeTodo(text) {
    const todoIndex = todos.findIndex(todo => todo.text === text); //examinamos cada todo cual indice tiene exactamente el text
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; //agarra el indice correspondiente y le cambia el completed de false a true
    saveTodos(newTodos);
    //setTodos(newTodos);
/*      todos[todoIndex] = {
       text : todos[todoIndex].text,
       completed: true, */
     };
  

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); 
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //aca agarra el elemento del index elegido, y elimina 1 
    //setTodos(newTodos);
   saveTodos(newTodos);

  }

  //console.log('Render (antes de use effecte)');
  //React.useLayoutEffect es para usar en caso de eventos
  /* React.useEffect( () =>{
    console.log('use effect');
  }, [totalTodos]); */ //ejecuta el codigo que le enviemos por dentro antes de que se renderice todo
  // y con los [] vacios se ejecuta solo una vez. si los llenamos con totalTodos, va a escuchar 
  //todas las veces que hayan cambios en totalTodos
  //console.log('Render (luego de use effecte)');
  return (
    <AppUI 
    loading={loading}
    error={error}
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
