import React from 'react'
import { Link } from '@reach/router'
import Logo from '../logo-alice.png'
import './Header.css'

const openNav = () => document.getElementById('burgerNav').style.width = '100%'
const closeNav = () => document.getElementById('burgerNav').style.width = '0%'

const Header = () =>
  <header id="yogaAliceHeader">
    <div id="yogaAliceLogo">
      <img src={Logo} alt='logo Yoga Alice' />
      <Link to='/'>Yoga ALice</Link>
    </div>
    <nav id="mainNav">
      <Link to='/'>Accueil</Link>
      <Link to='/yoga-alice'>Yoga ALice</Link>
      <Link to='/cours'>Cours</Link>
      <Link to='/shiatsu'>Shiatsu</Link>
      <Link to='/stages'>Stages</Link>
      <Link to='/inspirations'>Inspirations</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
    <div id="burgerBtn">
      <a title="Burger button" id="openNavBtn" onClick={openNav}>&#9776;</a>
    </div>
    <div id="burgerNav" className="overlay">
      <a id="closeNavBtn" onClick={closeNav}>&times;</a>
      <nav className="overlay-content">
        <Link to='/'>Accueil</Link>
        <Link to='/yoga-alice'>Yoga ALice</Link>
        <Link to='/cours'>Cours</Link>
        <Link to='/shiatsu'>Shiatsu</Link>
        <Link to='/stages'>Stages</Link>
        <Link to='/inspirations'>Inspirations</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  </header>

export default Header
