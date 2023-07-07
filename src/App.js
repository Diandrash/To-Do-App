import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([])

//Run Once When Application Started
useEffect(() => {
  getLocalTodo()
}, []);

useEffect(() => {
  filterTodosHandler()
  saveLocalTodo()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [todos, status])

 function filterTodosHandler() {
  switch(status) {
    default:
      setFilterTodos(todos)
      break;
    case "completed" :
      setFilterTodos(todos.filter((todo) => todo.completed === true))
      break;
    case "uncompleted" :
      setFilterTodos(todos.filter((todo) => todo.completed === false))
      break;
  }
 }

 // SAVE TO LOCAL STORAGE

const saveLocalTodo = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const getLocalTodo = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]))
  } else {
    let localData = JSON.parse(localStorage.getItem("todos"))
    setTodos(localData)
    console.log(localData, 'tes')
  }
}

  return (
    <div className="App">
      <header>
        <h3>To Do App </h3>
      </header>
{/*  */}
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus} />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filterTodos} />
    </div>
  );
}

export default App;
