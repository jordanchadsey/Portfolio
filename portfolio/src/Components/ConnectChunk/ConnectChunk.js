import React from "react";

import ContactForm from "../ContactForm";
const ConnectChunk = () => (
  <div className= "homechunk row">
    <div className="row">
    <div className="col s12 m2 center "/>
    <div className="col s12 m8 center"> <h3  className="sectiontitle"> Connect </h3></div>
    <div className="col s12 m2 center "></div>
    </div>
    <div className="row">
    <div class="col s12 m6">
      <ContactForm/>
  </div>
  <div className="col s12 m6">
    <h3 className= "center-align"> ... or Reach Me Here </h3>
    <div className="contactcard black">
      <a className= "white-text"href="mailto:jordan@identipop.com"><i className= "fa fa-envelope"></i>E-Mail Me</a>
  </div>
  </div>
</div>
</div>
);

export default ConnectChunk;
