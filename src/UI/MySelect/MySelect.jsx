import React from 'react'
import classes from './MySelect.module.css'

const MySelect = ({ options, defaultOption, value, onChange }) => {
  return (
    <select
      className={classes.selectWrapper}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
