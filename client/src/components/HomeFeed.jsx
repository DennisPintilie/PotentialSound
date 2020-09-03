import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PostFeedEntry from "./PostFeedEntry.jsx";

const HomeFeed = ({ arrPosts, userName }) => {
  const posts = arrPosts;

  return (
    <div>
      <Link to="/createProfile">CreateProfile</Link>
      <br />
      <Link to={`/profile/${userName}`}> Go to Profile Page </Link>
      <h1>
        PotentialSound
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="https://tinyurl.com/y3h5vk9r"
            alt="Avatar"
            style={{
              width: "auto",
              height: "100%",
              display: "inline",
              margin: "0 auto",
              marginLeft: "-25%",
            }}
          />
        </div>
        <button type="button">MENU</button>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search for Post"
          style={{ width: "500px", height: "30px", fontSize: "14px", paddinLeft: "10px" }}
        ></input>
        <button type="button" style={{ borderRadius: "5px" }}>
          <img src="https://tinyurl.com/y2v9h8rz" style={{ width: "15%", height: "15%" }} />
        </button>
        <div>
          <Link to="/createPostMessage">
            <button
              type="button"
              style={{
                fontSize: "20px",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
            >
              Create A Post
            </button>
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(200,200,200)", height: "500px" }}>
        {posts.map((post, i) => (
          <div key={`${i}`}>
            <PostFeedEntry post={post} />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

HomeFeed.propTypes = {
  arrPosts: PropTypes.arrayOf(
    PropTypes.shape({
      posterName: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
      profilePic: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  userName: PropTypes.string.isRequired,
};

export default HomeFeed;
