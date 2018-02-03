import React from "react";
import "./PortfolioCards.css";

const PortfolioCards = (props) =>(
  <div className="col s12 m4">
  <div class="card black center-align portfoliocard z-depth-2 ">
  				<div class="card-image">
  					<img alt={props.title} id={props.title} className= "actualcardimage center"src={props.image}/>
  				</div>
  				<div class="card-content">
            <h4 className= "white-text projecttitle">{props.title}</h4>
  					<p className="descrip">{props.description}</p>
  				</div>

  				<div class="card-action">

  				</div>

  			</div>
      </div>
);

export default PortfolioCards;
