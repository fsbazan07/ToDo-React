import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props){
    const onClickButton =  () =>{
    props.setOpenModal(prevState => !prevState);
};
return(
    <section>
    <button 
    
    className="CreateTodoButton"
    onClick={onClickButton}
    >
        +
        </button>
    
    </section>
)}

export { CreateTodoButton };