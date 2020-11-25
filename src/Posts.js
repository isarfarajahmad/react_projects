import React from "react";
import Post from "./Post";
const Posts = ({ posts, removePost }) => {
  return (
    <section>
      <div className="title">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      <div>
        {posts.map((post) => {
          return <Post key={post.id} {...post} removePost={removePost}></Post>;
        })}
      </div>
    </section>
  );
};

export default Posts;
