import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import MyHeader from "./components/UI/header/MyHeader";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'fsdfsdf', body: 'bcvbcvb'},
    {id: 3, title: 'ewrfwefsdfsdf', body: 'cxcvbcvbcvb'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const newPost = posts.filter(post => post.id !== id)
    setPosts(newPost)
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} setVisible={setModal}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts.length > 0 && <MyHeader title={"Список постов"}/>}
      <PostList posts={sortedAndSearchedPosts} deletePost={deletePost}/>
    </div>
  )
}

export default App;
