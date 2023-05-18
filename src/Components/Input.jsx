import React, {useState} from 'react'

const Input = (props) => {

    // const {todoList, setTodoList} = props
    // const {todoName, setTodoName} = useState("")

    const {todoList, setTodoList} = props
    const [todoName, setTodoName] = useState("")

    const inputHandler = (e) =>{setTodoName(e.target.value);}

    const formHandler = (e) =>{e.preventDefault();
        let newTodo = {
            name: todoName,
            isDone: false
        }
        setTodoList([...todoList, newTodo]);
        setTodoName("");
    }


  return (
    <div>
        <form onSubmit = {formHandler}>
            <div>
                <input type="text" onChange = {inputHandler} name = "todo" value = {todoName} />
            </div>
            <input type="submit" value = "Add" className = "btn btn-primary" />
        </form>
    </div>
  )
}

export default Input