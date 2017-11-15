import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'




//reducer
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// 使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。
// 例如，VisibleTodoList 需要计算传到 TodoList 中的 todos，
// 所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
const mapStateToProps = (state) => ({
  // console.log(state);
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

// 除了读取 state，容器组件还能分发 action。类似的方式，
// 可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
// 例如，我们希望 VisibleTodoList 向 TodoList 组件中注入一个叫 onTodoClick 的 props 中，
// 还希望 onTodoClick 能分发 TOGGLE_TODO 这个 action：

// const mapDispatchToProps = {
//   onTodoClick: toggleTodo
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) =>{
      dispatch(toggleTodo(id))
    }
  }
}



// mapStateToProps,
// mapDispatchToProps：这两个方法使展示与逻辑分离

//connect：生成容器
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
