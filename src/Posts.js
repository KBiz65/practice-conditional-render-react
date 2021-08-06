import React, { useState, useEffect } from "react";
import PostList from "./PostList";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } catch (error) {
      throw error;
    }
  }, []);

  if (posts.length > 0) {
    return <PostList posts={posts} setPosts={setPosts} />;
  } else {
    return "Loading.....";
  }
}

export default Posts;
