import React from "react";
import Todo from "../components/Todo";


const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => (
                  <Todo 
                  key={todo.id} 
                  text={todo.text} 
                  todos={todos}
                  setTodos={setTodos}
                  todo={todo}
                  />  
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;