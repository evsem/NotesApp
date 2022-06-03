import React, { useMemo, useState } from "react"
import Filter from "./Components/Filter/Filter"
import Form from "./Components/Form/Form"
import List from "./Components/List/List"
import { usePosts } from "./Hooks/usePosts"
import "./Style/App.css"
import MyInput from "./UI/MyInput/MyInput"
import MySelect from "./UI/MySelect/MySelect"

const App = () => {
  let [posts, setPosts] = useState([])
  let [filter, setFilter] = useState({ search: "", select: "" })
  let selectedAndSearchedPosts = usePosts(filter.search, filter.select, posts)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <Form addPostFunc_forForm={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {posts.length ? (
        <List props_forList={selectedAndSearchedPosts} remove={removePost} />
      ) : (
        <h2 className="App_warningTitle">No notes</h2>
      )}
    </div>
  )
}

export default App
