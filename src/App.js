import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Posts from "./Posts";
const url =
  "https://sarfarajahmad.herokuapp.com/api/portfolio/posts/?format=json";
function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const removePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const posts = await response.json();
      setLoading(false);
      setPosts(posts);
      console.log(posts);
    } catch (error) {
      setLoading(false);
      alert("Some error occurred !");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (posts.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no posts left</h2>
          <button className="btn" onClick={() => fetchPosts()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Posts posts={posts} removePost={removePost} />
    </main>
  );
}

export default App;
