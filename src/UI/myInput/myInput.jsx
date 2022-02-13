import React from 'react'
import classes from './myInput.module.css'

const myInput = ({ ...props }) => {
  return <input className={classes.myInput} {...props} />
}

export default myInput
