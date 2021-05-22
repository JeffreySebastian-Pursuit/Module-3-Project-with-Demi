import React from "react";
import './Home.css'
import axios from 'axios'
require('dotenv').config()

class Home extends React.Component {

state = { input: '', hasSearched: false, videos: []}

fetchVideos = async() => {
  const {input} = this.state

    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`)
    console.log(res.data.items[0].id.videoId)
    this.setState({videos: res.data.items})
    // debugger
}

handleChange = (e) =>{
  this.setState({input: e.target.value})
  // debugger
}
handleSubmit = (e) =>{
  e.preventDefault()
  this.fetchVideos()

}

// searchByKeyword = () =>{
//   const results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

//   for(let i in results.items) {
//     let item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }


  render() {
      const {input, videos} = this.state
      const videoSrc = `https://www.youtube.com/embed/${videos[0].id.videoId}`;
    return (
      <div>
        <h2> Search for some videos</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="search for a video"></input>
          <button type="submit">Search</button>
        </form>
        <section id="videos-container">
        <iframe src={videoSrc} allowFullScreen title='Video player'/>
        <ul>
          {videos.map(item =>{
      
      return <li key={item.id.videoId}>{item.id.videoId}</li>
    })}
    </ul>

        </section>
      </div>
    );
  }
}

export default Home;
