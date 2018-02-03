import React from "react";
import Intro from "../../Components/Intro";
import Skills from "../../Components/Tech"
import Works from "../../Components/Works";
import ConnectChunk from "../../Components/ConnectChunk";
class Home extends React.Component{
  state={};
  render(){
    return(
    <div>
    <div className="row"></div>
    <div className = "chunks">
      <Intro/>
      <Skills/>
      <Works/>
      <ConnectChunk/>
      </div>
    </div>
    );
  }


};

export default Home;
