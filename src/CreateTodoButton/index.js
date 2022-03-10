import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton (){
    const onClickButton =  (msg) => alert(msg)
return(
    <section>
    <button 
    
    className="CreateTodoButton"
    onClick={() => onClickButton('Aqui se deberia abrir modal')}
    >
        +
        </button>
    
    </section>
)}

export { CreateTodoButton };