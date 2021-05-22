import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
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
  const showVideo = (e) => {
    setClickVideo(e.target.title);
    console.log(e.target.title);
    debugger;
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
              // <Video item={item}/>
              // const videoSrc = `https://www.youtube.com/embed/${item.id.videoId}`;
              // debugger
              return (
                <li onClick={showVideo}>
                  <a href="./Video">
                    <img
                      src={item.snippet.thumbnails.default.url}
                      // allowFullScreen
                      title={item.id.videoId}
                      key={item.id.videoId}
                      alt={item.snippet.title}
                    />
                  </a>
                  <p>{item.snippet.title}</p>
                </li>
              );
              // <li key={item.id.videoId}>{item.id.videoId}</li>
            })}
          </ul>
        </section>
      ) : null}
      {/* <Video showVideo={showVideo} /> */}
    </div>
  );
};

export default Home;
