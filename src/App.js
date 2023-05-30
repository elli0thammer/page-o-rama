import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MyHeader from "./components/UI/header/MyHeader";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const newPost = posts.filter(post => post.id !== id)
    setPosts(newPost)
  }

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      {posts.length === 0
        ? <MyHeader title={"Добавьте пост"}/>
        : <PostList posts={posts} title={"Список постов"} deletePost={deletePost}/>
      }
    </div>
  )
}

export default App;
