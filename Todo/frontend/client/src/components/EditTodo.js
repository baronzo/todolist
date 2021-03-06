import React, { Fragment, useState } from 'react'
import Axios from 'axios'

const EditTodo = ({todo}) => {

  let api = 'http://localhost:5000'
  const [description, setDescription] = useState(todo.description)

  const updateTodo = async (e) => {
    e.preventDefault()
    try {
      const body = {description}
      const update = await Axios.patch(`${api}/todos/${todo.todo_id}`, body)
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>
      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
            </div>
            <div class="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateTodo(e)}>Edit</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo
