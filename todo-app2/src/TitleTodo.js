import React from 'react';


function TitleTodo(props) {
  return (
    <div className="TitleTodo">
        <p>Şu an yapmanız gereken <span className="badge badge-danger">{props.todos.length}</span> iş var</p>
        
    </div>
  );
}

export default TitleTodo;