import React from 'react'

import KnifeClosed from '/home/austin/projects/zen-cowboy/src/images/knife-up-closed-2.jpg'

function Home() {
  return (
    <div >
      <img id="links-wrapper-img" alt="cut" src={KnifeClosed} />
        <h1  className="home-logo" ><span className="accent-color">A</span><span>USTIN RHOADS</span></h1>
        
    </div>
    
  )
}

export default Home