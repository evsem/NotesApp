import React from "react"
import MyInput from "../../UI/MyInput/MyInput"
import MySelect from "../../UI/MySelect/MySelect"
import classes from "./Filter.module.css"

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <MyInput
        value={filter.search}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />

      <MySelect
        value={filter.select}
        onChange={(sortPosts) => setFilter({ ...filter, select: sortPosts })}
        defaultOption="Сортировка"
        options={[
          { value: "title", name: "On name" },
          { value: "body", name: "On description" },
        ]}
      />
    </div>
  )
}

export default Filter
