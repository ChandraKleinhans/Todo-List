import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Components/Todo';
import Input from './Components/Input';

function App() {
  
  const[todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div>
        <h4>Add a new thing to do:</h4>

        <Input todoList = {todoList} setTodoList = {setTodoList}></Input>

        <h4>You need to do these things:</h4>

        {todoList.map((todo, i) => <Todo key = {i} index = {i} todoList = {todoList} setTodoList = {setTodoList}></Todo>)}
      </div>
    </div>
  );
}

export default App;
