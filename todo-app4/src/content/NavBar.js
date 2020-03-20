import React,{useContext} from 'react';
import { TodoListContext } from '../context/TodoListContext';



const NavBar = () => {
    const {todos}=useContext(TodoListContext)
    return (
        <div className='navbar'>
        <h1>Yapılacaklar Listesi</h1>
        <p>Yapılacak 
        
        <span className='badge'>{todos.length}</span>
        
        işiniz var.</p>
            
        </div>
    );
};





export default NavBar;
