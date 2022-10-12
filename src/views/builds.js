import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './builds.css'
<html>
  <body>
    <div className='builds-container2'>
      <Image
          alt="image"
          src="/playground_assets/treefarm.png"
          className="treefarm-image">
        </Image>
    </div>
  </body>
</html>

const Builds = (props) => {
  return (
    <div className="builds-container">
      <Helmet>
        <title>Builds - RTFM Server</title>
        <meta property="og:title" content="Builds - RTFM Server" />
      </Helmet>
      <div className="builds-container1">
        <Link to="/" className="builds-builds button">
          Home
        </Link>
        <Link to="/about-us" className="builds-about-us button">
          About Us
        </Link>
        <Link to="/dyn-map" className="builds-dyn-map button">
          DynMap
        </Link>
        <Link to="/members" className="builds-navlink button">
          <span>
            <span>Members</span>
            <br></br>
          </span>
        </Link>
      </div>
      <div className='builds-container2'>
        <Image
          alt="image"
          src="/playground_assets/treefarm.png"
          className="treefarm-image">
        </Image>
      </div>
      <span className='copyright'>
        Copyright © RTFM Group 2022
      </span>
    </div>
  )
}

export default Builds
