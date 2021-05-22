import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
require("dotenv").config();

const Home = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${input}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
      );
      // console.log(res.data.items[0].id.videoId);
      setVideos(res.data.items);
      debugger
      console.log("THIS IS THE DATA", res.data.items)
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  };
  // useEffect(() => {
  //   fetchVideos();
  // }, []);

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

  // searchByKeyword = () =>{
  //   const results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

  //   for(let i in results.items) {
  //     let item = results.items[i];
  //     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  //   }
  // }

  // let search;
  // if(hasSearched){
  //   if(videos?.title){
  //     search = {

  //     }
  //   }
  // }
  return (
    <div>
      <h2> Search for some videos</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search for a video"
        ></input>
        <button type="submit">Search</button>
      </form>
      {hasSearched ? (
        <section id="videos-container">
          <ul>
            {videos.map((item) => {
              const videoSrc = `https://www.youtube.com/embed/${item.id.videoId}`;
              return (
                <li>
                <iframe
                  src={videoSrc}
                  allowFullScreen
                  title="Video player"
                  key={item.id.videoId}
                />
                <title>{item.snippet.title}</title>
                </li>
              );
              // <li key={item.id.videoId}>{item.id.videoId}</li>
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
};

export default Home;
