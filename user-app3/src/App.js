import React from 'react';
import Users from './Users';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Users></Users>
      </UserProvider>
    </div> 
  );
}

export default App;
