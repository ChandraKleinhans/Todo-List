import React from 'react'

const Todo = (props) => {

    const {index, todoList, setTodoList} = props

    let chosenTodo = todoList[index];
    let todoStatus = todoList[index].isDone;

    let textDone = {textDecoration: "none"}
    let textNotDone = {textDecoration: "line-through"}

    const checkHandler = (e) =>{
        todoList[index].isDone = !todoList[index].isDone
        setTodoList([...todoList])
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        let filteredList = todoList.filter(todo => todoList.indexOf(todo) !== index);
        setTodoList(filteredList);
    }


  return (
    <div>
        <form onSubmit = {deleteHandler}>
            <input type="checkbox" className = "" checked = {todoStatus} onChange = {checkHandler} />
            <p style = {todoStatus ? textNotDone : textDone}>{chosenTodo.name}</p>
            <input type="submit" className = "btn btn-danger" value = "Delete" />
        </form>
    </div>
  )
}

export default Todo