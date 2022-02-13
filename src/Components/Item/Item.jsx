import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import classes from './Item.module.css'

const Item = ({ props_forItem, number, removeFunc_forItem }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <h3 className={classes.infoContainer_title}>
          {number}. {props_forItem.title}
        </h3>
        <p className={classes.infoContainer_infoPost}>{props_forItem.body}</p>
      </div>
      <MyButton onClick={() => removeFunc_forItem(props_forItem)}>
        Delete
      </MyButton>
    </div>
  )
}

export default Item
