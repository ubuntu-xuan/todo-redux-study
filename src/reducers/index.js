import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//combineReducers:将多个reduces合并成一个
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
