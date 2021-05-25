import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Switch } from "react-router-dom";
import Video from "./Components/Video";
import OfficialHomePage from "./Components/OfficialHomePage";
import FourOFour from "./Components/Four0Four";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/videos/:id" component={Video} />
        <Route path="/aboutPage" component={About} />
        <Route path="/youtube" component={Home} />
        <Route exact path="/" component={OfficialHomePage} />
        <Route path="/*" component={FourOFour} />
      </Switch>
    </div>
  );
}

export default App;
