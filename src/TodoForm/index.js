import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';


function TodoForm() {
    
const [newTodoValue, setNewTodoValue] = React.useState('');
const {
    addTodo,
} = React.useContext(TodoContext);

/* const handleCloseModal = (props) => {
    props.setState({ isOpen: false });
} */

const onCancel = (props) => {
   
    props.setOpenModal(false);

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
    <label>Escribe aqui tu proxima tarea</label>
    <textarea 
    value={newTodoValue}
    onChange={onChange}
    placeholder='Cortar la cebolla para el almuerzo'
    />
    <div className='TodoForm-buttonContainer'>
    <button
    className='TodoForm-button TodoForm-button-cancel'
    type='button'
    onClick={onCancel}
    >
        Cancelar
        </button>
    <button
    className='TodoForm-button TodoForm-button-add'
    type='submit'
        >
        Agregar
        </button>
    </div>
    </form>
  );
}

export {  TodoForm  };