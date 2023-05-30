import React from 'react';
import PostItem from "./PostItem";
import MyHeader from "./UI/header/MyHeader";

const PostList = ({posts, title, deletePost}) => {
  return (
    <div>
      <MyHeader title={title}/>
      {posts.map((post, index) => <PostItem number={index + 1} post={post} key={post.id} deletePost={deletePost}/>)}
    </div>
  );
};

export default PostList;
