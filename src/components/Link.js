import React from 'react'
import PropTypes from 'prop-types'


//{ active, children, onClick } 从容器组件FilterLink中获得

const Link = ({ active, children, onClick }) => {
  //当全局的state.visibilityFilter属性与当前的Link组件一致时，显示没有href的a
  if (active) {
    //children指的是Footer.js中的<FilterLink/>下的子组件

    return <span>{children}</span>
  }

  //当全局的state.visibilityFilter属性与当前的Link组件一致时，显示有href的a

  return (
    // eslint-disable-next-line

    <a href="#"
      onClick={e => {
        e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
