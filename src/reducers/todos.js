const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':

      console.log('ADD_TODO:');
      console.log([
        ...state, //会返回完整的state
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      //遍历每一个todo
      //TodoList中调用了TOGGLE_TODO这个action，

      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
