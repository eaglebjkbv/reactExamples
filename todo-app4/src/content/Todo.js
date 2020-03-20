import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';



const Todo = (props) => {
    const { removeTodo }=useContext(TodoListContext)
    const style={
        color: 'red'  
    }
    if(props.todo.priority==='1'){
        style.color='rgb(250, 149, 149)'
    }else if(props.todo.priority==='2'){
        style.color='rgb(248, 250, 149)'
    }else 
    {
        style.color='rgb(149, 250, 166)'
    }
    return (
           <div className='todo' >
            <p style={style} className='todo-title' key={props.todo.id}>{props.todo.todo}
            
            </p>
            <span className='trash'><i onClick={()=>removeTodo(props.todo.id)} class="fas fa-trash"></i></span>

            <p className='todo-desc'>{props.todo.description}</p>
        </div>
    );
};





export default Todo;
