import React from 'react'
import '../assets/styles/sections/platforms.css'
import android from '../assets/images/platform-android.svg'
import desktop from '../assets/images/platform-desktop.svg'
import apple from '../assets/images/platform-apple.svg'

const PlatformsSection = () => (
  <div className="platforms container">
    <h2 className="platforms__title">Available platforms</h2>
    <div className="platforms__container">
      <div className="platforms__platform">
        <img
          src={android}
          alt="Android"
          title="Android"
          className="platforms__icon"
          rel="preload"
        />
      </div>
      <div className="platforms__platform">
        <img src={apple} alt="Apple" title="Apple iOS" className="platforms__icon" rel="preload" />
        <span className="platforms__asterix">*</span>
      </div>
      <div className="platforms__platform">
        <img
          src={desktop}
          alt="Desktop"
          title="Desktop"
          className="platforms__icon"
          rel="preload"
        />
        <span className="platforms__asterix">*</span>
      </div>
    </div>
    <p className="platforms__notice">
      * iOS release needs to be approved by Apple
      <br />
* Desktop version coming soon
    </p>
  </div>
)

export default PlatformsSection
