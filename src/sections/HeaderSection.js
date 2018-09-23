import React from 'react'
import '../assets/styles/sections/header.css'
import logo from '../assets/images/coinid-logo.png'
import background from '../assets/images/bg.png'

const HeaderSection = () => (
  <div className="header">
    <a href="https://coinid.org">
      <img src={logo} className="header__logo" alt="logo" />
    </a>
    <img src={background} className="header__background" alt="background" />
    <div className="header__container container">
      <h1 className="header__title">
        Myriad Wallet
        <br />
        for COINiD
      </h1>
      <p className="header__intro">
        If the goals are met we will add support for Myriad in COINiD.
      </p>
    </div>
  </div>
)

export default HeaderSection
