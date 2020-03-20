import React from 'react';
import TodoForm from './TodoForm';


function App() {
  
  
  const [todoItems,setTodoItems]=React.useState([]);
  
  const todoEkle=(e)=>{
    e.preventDefault();
    setTodoItems([...todoItems,{
    id:todoItems.length,
    todo:'Sinemaya Gidilecek'
    }]);
  }
  return (
    <div className="App">
    
      <ul className="list-group">
        {todoItems.map(item=>(<li clasName="list-group-item" key={item.id}>{item.todo}</li>)) }
      </ul>
      <TodoForm todoEkle={todoEkle}/>
    
      
    </div>
  );
}

export default App;
