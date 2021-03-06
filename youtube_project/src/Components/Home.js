import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
require("dotenv").config();

const Home = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [clickVideo, setClickVideo] = useState("");

  const fetchVideos = async (prevSearch) => {
    try {
      const newInput = input || prevSearch;
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${newInput}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("input")) {
      fetchVideos(localStorage.getItem("input"));
      setHasSearched(true);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    fetchVideos();
    localStorage.setItem("input", input);

    setInput("");
  };

  const showVideo = (e) => {
    setClickVideo(e.target.title);
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
                  <Link to={`/videos/${item.id.videoId}`} className="video">
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
    </div>
  );
};

export default Home;
