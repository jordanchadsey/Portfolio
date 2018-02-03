import React from "react";
import PortfolioCards from "../PortfolioCards";

const Works = () => (
  <div className= "homechunk row">
    <div className="row">
    <div className="col s12 m2 center "/>
    <div className="col s12 m8 center"> <h3  className="sectiontitle"> Featured Projects </h3></div>
    <div className="col s12 m2 center "></div>
    </div>
    <div className="row">
    <div class="col s12 m12">
  <PortfolioCards title ="Portflowio"image='https://i.imgur.com/PwhXHpZ.gif?1' description= "cool" />
  </div>
  </div>
</div>
);

export default Works;
