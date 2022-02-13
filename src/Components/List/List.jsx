import React from 'react'
import Item from '../Item/Item'
import classes from './List.module.css'

const List = ({ props_forList, remove }) => {
  return (
    <div className={classes.wrapper}>
      {props_forList.map((post, idx) => (
        <Item
          key={props_forList.id}
          number={idx + 1}
          props_forItem={post}
          removeFunc_forItem={remove}
        />
      ))}
    </div>
  )
}

export default List
