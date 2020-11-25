import React from "react";

const Post = ({ id, thumbnail, headline, sub_headline, removePost }) => {
  return (
    <article className="single-tour">
      <img src={thumbnail} alt={headline} />
      <footer>
        <div className="tour-info">
          <h4>{headline}</h4>
          <p>{sub_headline}</p>
          <button className="delete-btn" onClick={() => removePost(id)}>
            Remove Project
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Post;
