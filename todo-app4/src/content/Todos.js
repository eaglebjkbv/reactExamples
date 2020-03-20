import React,{useContext} from 'react';
import { TodoListContext } from '../context/TodoListContext';
import Todo from './Todo';




const Todos = () => {
    const { todos }=useContext(TodoListContext);
    const pstyle={
        color:'#FFFFFF'
    }
    return (
        <div className='todos'>
        {todos.length ? ( todos.map(todo=>{
            return(
                
                <Todo key={todo.id} todo={todo}></Todo>
            )
        }) ):
                <p style={pstyle}>Yapılacak iş yok obareeeyyy !!!</p>
        }
            
        </div>
    );
};
export default Todos;
