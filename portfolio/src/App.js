import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className = "container">
        <nav className = " white z-depth-0">
            <div className=" transparent nav-wrapper z-depth-0">
              <a href="#" className="title black-text">Jordan Chadsey</a>
                <ul id="nav-mobile" className="right  transparent  hide-on-med-and-down black-text">
                    <li className ="black-text"><Link to = "/">Home</Link></li>
                    <li><Link className= "black-text link" to = "/about">About</Link></li>
                    <li><Link className= "black-text link" to = "/projects">Projects</Link></li>
                    <li><Link className= "black-text link" to = "/connect">Connect</Link></li>
                    <li><Link className= "black-text link" to = "/posts">Posts</Link></li>
    </ul>
  </div>
</nav>
</div>

    </Router>
    );
  }
}

export default App;
