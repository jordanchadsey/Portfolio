import React from "react";
import $ from "jquery";
const Sticker =(props)=>(
  <img className="tooltipped sticker" id={props.name} src={props.url} data-position="bottom" data-delay="50" data-tooltip={props.name}/>
);

export default Sticker;
