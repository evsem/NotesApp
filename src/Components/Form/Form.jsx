import React, { useState } from "react"
import MyButton from "../../UI/MyButton/MyButton"
import MyInput from "../../UI/MyInput/MyInput"
import classes from "./Form.module.css"

const Form = ({ addPostFunc_forForm }) => {
  let [param, setParam] = useState({ title: "", body: "" })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    addPostFunc_forForm(newPost)
    setParam({ title: "", body: "" })
  }
  return (
    <form className={classes.wrapper}>
      <MyInput
        type="text"
        placeholder="Note title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Note body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <MyButton
        onClick={addNewPost}
        style={{ backgroundColor: "#fff", border: "none", padding: "9px 50px" }}
      >
        Add
      </MyButton>
    </form>
  )
}

export default Form
