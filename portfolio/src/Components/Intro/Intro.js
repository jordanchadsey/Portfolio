import React from "react";
import "./Intro.css";

const Intro = () =>(
  <div className= "row intro homechunk">
  <div className = "col s12 m4 center">
    <img src = "https://i.imgur.com/4yZ4ujD.png" className= "img-responsive intronode"/>
  </div>
  <div className = "col s12 m4 center">
  <img src = "https://imgur.com/72cRy5w.jpg" className= "img-responsive profilepic circle"/>
  </div>
  <div className = "col s12 m4 center">
    <div className = "card z-depth-0">
      <div class="card-panel black biofront">
          <p class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </p>
          <a className = "btn waves-effect light-blue moreaboutme"> <i class="fa fa-bolt" aria-hidden="true"></i> More about me </a>
    </div>
  </div>

  </div>
</div>

);

export default Intro;
