import React from 'react';
import TodoListProvider from './context/TodoListContext';
import NavBar from './content/NavBar';
import Todos from './content/Todos';
import TodoForm from './content/TodoForm';


function App() {
  return (
    <div className="App">
      <TodoListProvider>
      
         <NavBar/>
         <TodoForm/>
         <Todos></Todos>
      </TodoListProvider>
    </div>
  );
}

export default App;
