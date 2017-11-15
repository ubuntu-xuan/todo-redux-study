import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value)) //store分发action
        
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo) //生成容器

export default AddTodo
