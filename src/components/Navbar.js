import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id="nav-bar">
        <Link to="/"><span id="nav-logo"><span className="accent-color">Z</span>EN COWBOY</span></Link>
        <div id="link-list" >
          <Link className="nav-links web-dev-logo" to="/webdev" ><span>WEBDEV</span></Link>
          <Link className="nav-links hack-logo" to="/hacking-tools">HACK</Link>
          <Link className="nav-links art-logo" to="/art" ><span>ART</span></Link>
          <Link className="nav-links tech-logo" to="/tech-builds" ><span>TECH BUILDS</span></Link>
        </div>

        
    </div>
  )
}

export default Navbar