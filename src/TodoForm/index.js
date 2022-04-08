import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';


function TodoForm() {
    
const [newTodoValue, setNewTodoValue] = React.useState('');
const {
    addTodo,
} = React.useContext(TodoContext);

const onCancel = () => {
    
    //
}
const onChange = (event) => {
    setNewTodoValue(event.target.value)
}
const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
}

    return (
    <form onSubmit={onSubmit}>
    <label>...</label>
    <textarea 
    value={newTodoValue}
    onChange={onChange}
    placeholder='Cortar la cebolla para el almuerzo'
    />
    <div>
    <button
    type='button'
    onClick={onCancel}
    >
        Cancelar
        </button>
    <button
    type='submit'
        >
        Agregar
        </button>
    </div>
    </form>
  );
}

export {  TodoForm  };