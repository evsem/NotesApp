import React from 'react'
import classes from './myButton.module.css'

const myButton = ({ children, ...props }) => {
  return (
    <button className={classes.myButton} {...props}>
      {children}
    </button>
  )
}

export default myButton
