import React from "react";

function CommentListItem({ comment }) {
  console.log(comment);
  return (
    <li style={{ borderBottom: "1px dashed black" }}>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
    </li>
  );
}

export default CommentListItem;
