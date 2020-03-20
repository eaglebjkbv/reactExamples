import React,{ useContext,useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';



const TodoForm = () => {
    const { addTodo }=useContext(TodoListContext);
    const [todo,setTodo]=useState('');
    const [desc,setDesc]=useState('');
    const [priority,setPriority]=useState('1');

    
    const handlerChange=(e)=>{
        
        if(e.target.name==='todo'){
            setTodo(e.target.value);
            console.log('todo');
        }else if(e.target.name==='desc'){
            setDesc(e.target.value);
            console.log('description');
        }else{
            setPriority(e.target.value);
            console.log('priority');
        }   
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todo!==''){
            addTodo(todo,priority,desc);
        }
        setTodo('');
        setDesc('');
        setPriority('1');
    }
    return (
        <div className='todoform'>
            <form onSubmit={handleSubmit}>
                <input name= 'todo' onChange={handlerChange} value={todo} className='todoinput' type='text' placeholder='Yapılacak iş'></input>
                <input name= 'desc' onChange={handlerChange} value={desc} type='text' className='todoinput' placeholder='Açıklama'></input>
                <p>
                <select onChange={handlerChange} name='prior'className='todoselect' id="priority" value={priority}>
                    <option value="1">Çok Önemli</option>
                    <option value="2">Önemli</option>
                    <option value="3">Önemli Değil</option>
                </select>
                <button className='todoselect' type='submit' >Ekle</button>
                </p>
                
            </form>
        </div>
    );
};


export default TodoForm;
