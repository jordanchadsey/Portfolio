import React from "react";
import "./NavBar.css";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SocialIcons from "../SocialIcons";
const NavBar = () => (
  <div className = "row center-align navbar-fixed  headerrow">
      <div className=" nav-wrapper center z-depth-0">
  <nav className = " transparent center z-depth-0  ">
    <div className="col s12 m1 center"> <SocialIcons/></div>
        <div className = "col s12 m5 center">


          <a  className="title black-text light-blue accent-3 z-depth-3 center">Jordan Chadsey</a>


        </div>
<div class = "col s12 m6">
          <ul id="nav-mobile" className=" hide-on-sm-and-down black-text right ">
              <li><Link className = "white-text black link z-depth-3 center" to = "/">Home</Link></li>
              <li><Link className= "white-text black link z-depth-3 center" to = "/about">About</Link></li>
              <li><Link className= "white-text black link z-depth-3 center" to = "/portfolio">Portfolio</Link></li>
              <li><Link className= "white-text black link z-depth-3 center" to = "/connect">Connect</Link></li>
              <li><Link className= "white-text black link z-depth-3 center" to = "/posts">Posts</Link></li>
</ul>
</div>
</nav>
</div>

</div>

);

export default NavBar;
