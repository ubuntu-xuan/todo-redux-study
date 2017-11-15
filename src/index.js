import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'


const store = createStore(reducer)

//store中包含的内容是根据reducer来决定：

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })

// state包含了todos和visibilityFilter



console.log(store.getState())

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // 停止监听 state 更新
// unsubscribe();

// 传入 Store
// 所有容器组件都可以访问 Redux store，所以可以手动监听它。
// 一种方式是把它以 props 的形式传入到所有容器组件中。但这太麻烦了，因为必须要用 store 把展示组件包裹一层，
// 仅仅是因为恰好在组件树中渲染了一个容器组件。
// 建议的方式是使用指定的 React Redux 组件 <Provider> 来 魔法般的 让所有容器组件都可以访问 store，
// 而不必显示地传递它。只需要在渲染根组件时使用即可。

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
