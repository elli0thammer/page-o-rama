import React from 'react';
import PostItem from "./PostItem";
import MyHeader from "./UI/header/MyHeader";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, deletePost}) => {
  return (
    <div>
      {!posts.length &&
        <MyHeader title={"Добавьте пост"}/>
      }
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition key={post.id} timeout={500} classNames={"post"}>
            <PostItem number={index + 1} post={post} deletePost={deletePost}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
