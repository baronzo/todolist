import React, { Fragment, useState } from 'react'
import Axios from 'axios'

const InputTodo = () => {
  let api = 'http://localhost:5000'
  const [description, setDescription] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await Axios.post(`${api}/todos`,body)
      console.log(response);
      window.location = "/"
    } catch (error) {
      console.error(error)
    }
  }

  return (
      <Fragment>
          <h1 className="text-center mt-5">Todo List</h1>
          <form className="d-flex" onSubmit={onSubmit}>
            <input type="text" className="form-control" value={description} onChange = {e => setDescription(e.target.value)} />
            <button className="btn btn-success">Add</button>
          </form>
      </Fragment>
  )
}

export default InputTodo
