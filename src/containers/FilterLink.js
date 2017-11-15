import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'



// ownProps.filter指的是：Footer.js中的 <FilterLink filter="SHOW_ALL">的filter属性

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

//分发actions: dispatch(setVisibilityFilter(ownProps.filter))     组件与组件间关联？
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})


const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)



export default FilterLink
