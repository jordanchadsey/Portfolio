import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import SocialIcons from "./Components/SocialIcons";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Connect from "./pages/Connect";
import Posts from "./pages/Posts";
class App extends Component {
  render() {
    return(
      <Router>
      <div>
        <NavBar/>
        <div className = "container">


            <Route exact path='/'component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/connect' component={Connect}/>
            <Route path='/posts' component={Posts}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
