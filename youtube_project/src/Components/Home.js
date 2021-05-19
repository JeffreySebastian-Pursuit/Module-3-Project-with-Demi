import React from "react";
import './Home.css'
import axios from 'axios'
require('dotenv').config()

class Home extends React.Component {

state = { input: '', hasSearched: false, videos: []}

fetchVideos = async() => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=dog&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`)
    console.log(res)
    this.setState({videos: res.data})
    debugger


}

componentDidMount(){
    this.fetchVideos()
}


  render() {
      const {input} = this.state
    return (
      <div>
        <h2> Search for some videos</h2>
        <form>
          <input type="text" placeholder="search for a video"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Home;
