import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id="nav-bar">
        <Link to="/"><span id="nav-logo"><span className="accent-color">Z</span>EN COWBOY</span></Link>
        <Link className="nav-links hack-logo" to="/hacking-tools">HACK</Link>
        <Link className="nav-links art-logo" to="/art" ><span>ART</span></Link>
        
    </div>
  )
}

export default Navbar