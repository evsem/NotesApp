import { useMemo } from "react"

export const useSortedPosts = (select, posts) => {
  const sortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    }
    return posts
  }, [select, posts])

  return sortedPosts
}

export const usePosts = (search, select, posts) => {
  let sortPosts = useSortedPosts(select, posts)

  const selectedAndSearchedPosts = useMemo(() => {
    return sortPosts.filter((post) => post.title.toLowerCase().includes(search))
  }, [sortPosts, search])

  return selectedAndSearchedPosts
}
