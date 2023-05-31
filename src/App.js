import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import MyHeader from "./components/UI/header/MyHeader";
import {usePost} from "./hook/usePost";
import PreLoader from "./components/PreLoader/PreLoader";
import {postsAPI} from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

  const [isLoader, setIsLoader] = useState(true)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const newPost = posts.filter(post => post.id !== id)
    setPosts(newPost)
  }

  useEffect(() => {
    postsAPI.getPosts().then(res => {
      setPosts(res.data)
    })

    setTimeout(() => {
      setIsLoader(false)
    }, 1500)

  }, [])

  return (
    !isLoader ? (
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
    ) : (
      <PreLoader/>
    )
  )
}

export default App;
