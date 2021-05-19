import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/aboutPage' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    
    </div>
  );
}

export default App;
