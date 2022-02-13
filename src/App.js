import React, { useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'
import MySelect from './UI/MySelect/MySelect'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Python', body: 'Language' },
    { id: 3, title: 'Cotlin', body: 'Programming language' },
    { id: 4, title: 'Swift', body: 'Language' },
    { id: 5, title: 'Ruby', body: 'Programming language' },
    { id: 6, title: 'Java', body: 'Language' },
  ])
  let [selectedSort, setSelectedSort] = useState('')
  let [searchQuery, setSearchQuery] = useState('')

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <Form addPostFunc_forForm={addNewPost} />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultOption="Сортировка"
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По описанию' },
        ]}
      />

      {posts.length ? (
        <List props_forList={posts} remove={removePost} />
      ) : (
        <h2 className="App_warningTitle"> No posts</h2>
      )}
    </div>
  )
}

export default App
