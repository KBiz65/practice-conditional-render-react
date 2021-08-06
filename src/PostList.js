import React, { useEffect } from "react";
import PostListItem from "./PostListItem";

function PostList({ posts, setPosts }) {
  // let post = {
  //   userId: 1,
  //   id: 1,
  //   title: "sfjskdl fsdj fsdfds",
  //   body: "jfdsa fdja fdsakaf dfa jfds jfaj kfdsa jfds",
  //   showComment: false
  // };

  useEffect(() => {
    const updatedPosts = posts.map((post) => {
      return { ...post, showComments: false };
    });
    setPosts(updatedPosts);
  }, []);

  function handleClick(event) {
    event.preventDefault();

    const updatedPosts = posts.map((post) => {
      if (post.id === parseInt(event.target.id)) {
        return { ...post, showComments: !post.showComments };
      } else {
        return { ...post };
      }
    });
    setPosts(updatedPosts);
  }

  if ("showComments" in posts[0]) {
    const allPosts = posts.map((post, index) => {
      return (
        <PostListItem
          post={post}
          id={index}
          key={index}
          handleClick={handleClick}
        />
      );
    });

    return <ul style={{ listStyleType: "none" }}>{allPosts}</ul>;
  } else {
    return "...Loading";
  }
}

export default PostList;
