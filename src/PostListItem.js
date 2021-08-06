import React from "react";
import CommentList from "./CommentList";

function PostListItem({ post, handleClick }) {
  if (post.showComments === false) {
    return (
      <li style={{ border: "1px solid blue", marginBottom: "20px" }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={handleClick} id={post.id}>
          See Comments
        </button>
      </li>
    );
  } else {
    return (
      <li style={{ border: "1px solid blue", marginBottom: "20px" }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={handleClick} id={post.id}>
          Hide Comments
        </button>
        <CommentList postId={post.id} />
      </li>
    );
  }
}

export default PostListItem;
