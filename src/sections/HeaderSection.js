import React from 'react'
import '../assets/styles/sections/header.css'
import logo from '../assets/images/coinid-logo.png'
import background from '../assets/images/bg.png'

const HeaderSection = () => (
  <div className="header">
    <a href="https://coinid.org">
      <img src={logo} className="header__logo" alt="logo" rel="preload" />
    </a>
    <img src={background} className="header__background" alt="background" rel="preload" />
    <div className="header__container container">
      <h1 className="header__title">
        Myriad Wallet
        <br />
        by COINiD
      </h1>
      <p className="header__intro">
        If the goals are met we will release a Myriad branded version of the COINiD Wallet.
      </p>
    </div>
  </div>
)

export default HeaderSection
