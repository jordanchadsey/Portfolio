import React from "react";
import './Portfolio.css'
import Iframe from 'react-iframe';
class Portfolio extends React.Component{
  state={};

  
  render(){
    return(
      <div>
        <div className="row projectchunk black">
          <ul id="tabs-swipe-demo" class="tabs transparent">
  <li class="tab col s2"><a href="#dev-swipe-1">Portflow.io</a></li>
  <li class="tab col s2"><a href="#dev-swipe-2">MacroMeals</a></li>
  <li class="tab col s2"><a href="#dev-swipe-3">SnipBox</a></li>
  <li class="tab col s2"><a href="#dev-swipe-4">Clickster</a></li>
  <li class="tab col s2"><a href="#dev-swipe-5">PopGIF</a></li>
</ul>
<div id="dev-swipe-1" class="col s12 ">
<div className="col s10">
<Iframe url="https://portflowio.herokuapp.com/" width="1000px" height="700px" id="portflowiopreview" className= "previews" display="initial" position="relative" allowFullScreen/>
</div>
<div className="col s2 white-text">
<h4>Portflow.io</h4>
<p className="lead">blah blah</p>
</div>
</div>
<div id="dev-swipe-2" class="col s12 ">
  <div class="col s10">
  <Iframe url="https://macromeals.herokuapp.com/" width="900px" height="700px" id="macromealspreview" className= "previews" display="initial" position="relative" allowFullScreen/>
</div>
<div className= "col s2">
  <h4>MacroMeals</h4>
  <p className="lead">blah blah</p>
</div>
  </div>
<div id="dev-swipe-3" class="col s12 ">  <div class="col s10">
  <Iframe url="https://gogle.io/" width="900px" height="700px" id="snipboxpreview" className= "previews" display="initial" position="relative" allowFullScreen/>
  </div>
  <div className= "col s2">
  <h4>Snipbox</h4>
  <p className="lead">blah blah</p>
  </div></div>
<div id="dev-swipe-4" class="col s12 ">  <div class="col s10">
    <Iframe url="https://jordanchadsey.github.io/Clickster" width="1000px" height="700px" id="snipboxpreview" className= "previews" display="initial" position="relative" allowFullScreen/>


    </div>

    <div className= "col s2">
    <h4>Clickster</h4>
    <p className="lead">blah blah</p>
    </div></div>
  <div id="dev-swipe-5" class="col s12 ">  <div class="col s10">
        <Iframe url="https://jordanchadsey.github.io/PopGIF" width="1000px" height="700px" id="snipboxpreview" className= "previews" display="initial" position="relative" allowFullScreen/>
        </div>
        <div className= "col s2">
        <h4>PopGIF</h4>
        <p className="lead">blah blah</p>
        </div>
      </div>
</div>



        <div className="row projectchunk black">
          <ul id="tabs-swipe-demo" class="tabs transparent">
  <li class="tab col s3"><a href="#design-swipe-1">Test 1</a></li>
  <li class="tab col s3"><a class="active" href="#design-swipe-2">Test 2</a></li>
  <li class="tab col s3"><a href="#design-swipe-3">Test 3</a></li>
</ul>
<div id="design-swipe-1" class="col s12 ">Test 1</div>
<div id="design-swipe-2" class="col s12 ">Test 2</div>
<div id="design-swipe-3" class="col s12 ">Test 3</div>
        </div>
        <div className="row projectchunk black">
          <ul id="tabs-swipe-demo" class="tabs transparent">
  <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
  <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
  <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
</ul>
<div id="test-swipe-1" class="col s12 blue">Test 1</div>
<div id="test-swipe-2" class="col s12 red">Test 2</div>
<div id="test-swipe-3" class="col s12 green">Test 3</div>
        </div>
      </div>

    );
  }
};

export default Portfolio;
