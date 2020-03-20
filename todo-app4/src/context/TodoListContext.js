import React,{ useState,createContext } from 'react';

export const TodoListContext=createContext();

export const TodoListProvider = (props) => {
const [todos,setTodos]=useState([
    {id:1,todo:'Yemek Yapılacak',priority:'1',description:'Makarna Köfte'},
    {id:2,todo:'Bakkala Gidilecek',priority:'2',description:'yağ yumurta'},
]);
const addTodo=(todo,priority,description)=>{
    console.log(description);
    setTodos([...todos,{id:Math.random(),todo,priority,description}]);
};
const removeTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id));
}; 
    return (
        <TodoListContext.Provider value={{todos, addTodo, removeTodo}}>
        {props.children}
        </TodoListContext.Provider>
        
    );
};
export default TodoListProvider;
