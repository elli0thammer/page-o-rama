import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MyHeader from "./components/UI/header/MyHeader";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'fsdfsdf', body: 'bcvbcvb'},
    {id: 3, title: 'ewrfwefsdfsdf', body: 'cxcvbcvbcvb'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const newPost = posts.filter(post => post.id !== id)
    setPosts(newPost)
  }

  const [selectSort, setSelectSort] = useState('')

  const sortPost = (sort) => {
    console.log(sort)
    setSelectSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MySelect value={selectSort}
                onChange={sortPost}
                defaultValue={"Сортировка"}
                options={[
                  {value: 'title', name: 'По заголовку'},
                  {value: 'body', name: 'По описанию'}
                ]}/>
      {posts.length === 0
        ? <MyHeader title={"Добавьте пост"}/>
        : <PostList posts={posts} title={"Список постов"} deletePost={deletePost}/>
      }
    </div>
  )
}

export default App;
