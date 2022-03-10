import React from "react";
import './TodoList.css'

function TodoList (props){
return(
    <section>
    <ul>
    
    <p>{(props.children)}</p>
    
    </ul>
    </section>
)}

export { TodoList };