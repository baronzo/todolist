import React, { Fragment, useEffect, useState } from 'react'
import Axios from 'axios'
import EditTodo from './EditTodo'

const ListTodos = () => {
  
  let api = 'http://localhost:5000'
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await Axios.get(`${api}/todos`)
      setTodos(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  const deleteTodo = async (id) => {
    try {
      const deleteData = await Axios.delete(`${api}/todos/${id}`)      
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  console.log(todos);

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo = {todo}/></td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
