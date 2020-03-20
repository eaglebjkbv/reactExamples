import React from 'react';


function ListTodo(props) {
    
    const sonuc=props.todos.length>0 ?(
    props.todos.map(item=>{
        
        return  (
            <li className="list-group-item" key={item.id}>{item.value}
            <i  className="fas fa-pen mx-2" value={item.id}></i>
            <i  onClick={()=>props.deleteFunction(item.id)} className="fas fa-trash mx-2" value={item.id}></i>
            </li>
        )
        
    })):(
        <li className="list-group-item" >Liste Boş</li>
    );

  return (   
    <div className="ListTodo">
    <ul className="list-group d-flex">
    <form>
    {sonuc}
    </form>
        
      </ul>
    </div>
  );
  }

export default ListTodo;
