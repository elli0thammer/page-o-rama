import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import s from "./PostForm.module.css"

const PostForm = ({createPost, setVisible}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post, id: Date.now()
    }
    createPost(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form className={s.Form}>
      <MyInput value={post.title}
               onChange={(e) => setPost({...post, title: e.target.value})}
               type="text"
               placeholder="Название поста"/>
      <MyInput value={post.body}
               onChange={(e) => setPost({...post, body: e.target.value})}
               type="text"
               placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
};

export default PostForm;
