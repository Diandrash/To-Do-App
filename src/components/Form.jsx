import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus, status}) => {

    function handleInput(e) {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    function handleTodo(e) {
        e.preventDefault()
        setTodos([
            ...todos,
            {id : Math.random() * 100, text : inputText, completed : false}
        ]) 
        setInputText("")
    }
    function statusHandler(e) {
      setStatus(e.target.value)
    }

    return (
      <form>
        <input value={inputText} onChange={handleInput} type="text" className="todo-input" />
        <button onClick={handleTodo} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" onChange={statusHandler} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}



export default Form;