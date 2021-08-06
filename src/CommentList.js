import React, { useEffect, useState } from "react";
import CommentListItem from "./CommentListItem";

function CommentList({ postId }) {
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((json) => setPostComments(json));
    } catch (error) {
      throw error;
    }
  }, []);

  if (postComments.length > 0) {
    const allComments = postComments.map((comment, index) => {
      return <CommentListItem comment={comment} key={index} />;
    });
    return <ul style={{ listStyleType: "none" }}>{allComments}</ul>;
  } else {
    return "Loading....";
  }
}

export default CommentList;
