import React from 'react';
import ListTodo from './ListTodo'
import AddTodo from './AddTodo';
import TitleTodo from './TitleTodo';




function App() {
  const [todoItems, setTodoItems] = React.useState([{
    id:1,
    value:'deneme',
    isChangeble: false

  },{
    id:2,
    value:'İkinci Deneme',
    isChangable:true
  }]);

  
  const handleAddTodo=(e)=>{
    
  setTodoItems(
      [...todoItems,{
        id: Math.random(),
        value: e
      }]
    );
    }
    const handleDeleteTodo=(id)=>{
      console.log(id);
      const filtreli=todoItems.filter((item)=>item.id!==id)
      setTodoItems(filtreli);
    }
    const handleChangeTodo=(id)=>{
      console.log("Değişecek");
    }

  return (
    <div className="App container">
      <TitleTodo todos={todoItems}></TitleTodo>
      <ListTodo deleteFunction={handleDeleteTodo} changeFunction={handleChangeTodo} todos={todoItems}></ListTodo>
      <AddTodo addFunction={handleAddTodo} ></AddTodo>
    </div>
  );
}

export default App;
