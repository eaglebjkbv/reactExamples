import React from 'react';


function TodoForm(todoEkle) {

const [todo,setTodo]=React.useState([]);
const handleChange=(e)=>
{
    const todo=e.target.value;
}
const handleTodoEkle=(e)=>
{
    this.props.todoEkle();
}


return (
    
    <div className="TodoForm">
        <form>
            <div clasName="form-group">
                <label for="todoText"></label>
                <input onChange={handleChange} type="text" className="form-control"></input>
                <button onClick={handleTodoEkle} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    );



}
export default TodoForm;