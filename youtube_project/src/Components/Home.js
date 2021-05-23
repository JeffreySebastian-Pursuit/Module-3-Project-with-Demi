import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
require("dotenv").config();
// import Video from './Video'

const Home = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [clickVideo, setClickVideo] = useState("");

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
      );
      // console.log(res.data.items[0].id.videoId);
      setVideos(res.data.items);
      // debugger
      console.log("THIS IS THE DATA", res.data.items);
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    // debugger
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    fetchVideos();
    setInput("");
  };

  const showVideo = (e) => {
    setClickVideo(e.target.title);
    console.log(e.target.title);
    // debugger;
  };
  return (
    <div>
      <h2> Search for some videos</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search for a video"
          value={input}
        ></input>
        <button type="submit">Search</button>
      </form>
      {hasSearched ? (
        <section id="videos-container">
          <ul>
            {videos.map((item) => {
              return (
                <li onClick={showVideo} key={item.id.videoId}>
                  <Link to={`/videos/${item.id.videoId}`}>
                    <img
                      src={item.snippet.thumbnails.default.url}
                      title={item.id.videoId}
                      alt={item.snippet.title}
                    />
                    <p id="videoTitle">{item.snippet.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <h2>No Videos</h2>
      )}
      {/* <Video showVideo={showVideo} /> */}
    </div>
  );
};

export default Home;
