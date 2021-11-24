import React, {Component} from 'react';
import Con from '../mainComp/Con';


import {
  Link
} from 'react-router-dom';

class Nav extends Component {

  goHomeClicked() {  };
  render() {
    return (
     <nav>
     <li><a id="Home_button" onClick="goHomeClicked">Home Page</a>
     {/* <Link to="/">Home Page</Link> */}
     </li>

      <h3> Bitcoin Price </h3>

      {/* <ul>
        <li>Price in USD is <div className = "price" id="USD">xxxx.xx</div></li>
        <li>Price in CAD is <div className = "price" id="CAD">xxxx.xx</div></li>
        <li>Price in CNY is <div className = "price" id="CNY">xxxx.xx</div></li>
      </ul> */}
     </nav>
    );
  }

}

export default Nav;

  
/* var content = document.getElementById("content")
console.log(<Main/>)

var home_page = content.innerHTML

function goHomeClicked() {
    content.outerHTML = <Main/>
}

function reqListener () {
  const obj = JSON.parse(this.responseText);
  USD.innerHTML = obj.USD.last + " at " + (new Date().toLocaleTimeString())
  CAD.innerHTML = obj.CAD.last + " at " + (new Date().toLocaleTimeString())
  CNY.innerHTML = obj.CNY.last + " at " + (new Date().toLocaleTimeString())
}

function bitcoin_price_request(){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://blockchain.info/ticker");
oReq.send();
}

var intervalID = setInterval(bitcoin_price_request, 5000); */
