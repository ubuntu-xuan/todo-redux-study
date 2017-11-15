import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


// { todos, onTodoClick } 从容器组件VisibleTodoList中获取，该组件定义了TodoList中应该显示什么内容

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      //todo中包含了id completed text这三个参数
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
