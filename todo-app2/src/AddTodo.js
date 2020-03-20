import React from 'react';


function AddTodo(props) {
const [todoItems, setTodoItems] = React.useState('');
const handleOnChange=(e)=>{
    setTodoItems(e.target.value);
}
const handleAdd=(e)=>{
    e.preventDefault();
    if (todoItems!=='') props.addFunction(todoItems);
   
    setTodoItems('');
}
  return (



    <div className="AddTodo mt-4">
    <form >
    <div className="input-group mb-2">
        <input className="form-control" onChange={handleOnChange} type="text" value={todoItems} aria-describedby="button-addon2"></input>
    
    <div className="input-group-append">
        <button id="button-addon2" className="btn btn-outline-success" type='submit' onClick={handleAdd}>Ekle</button>
        </div>
        </div>
    </form>


    

    </div>
  );
}

export default AddTodo;