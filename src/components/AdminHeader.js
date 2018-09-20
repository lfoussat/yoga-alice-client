import React from 'react'
import { Link } from '@reach/router'
import { Icon } from 'semantic-ui-react'
import Logo from '../logo-alice.png'
import './Header.css'

const openNav = () => {
  document.getElementById('burgerNav').style.width = '100%'
}
const closeNav = () => {
  document.getElementById('burgerNav').style.width = '0%'
}

const AdminHeader = () =>
  <header id="yogaAliceHeader">
    <div id="yogaAliceLogo">
      <img src={Logo} alt='logo Yoga Alice' />
      <Link to='/my-inspirations'>Yoga ALice</Link>
    </div>
    <nav id="mainNav">
      <Link to='/my-inspirations'><Icon name='file' />My inspirations</Link>
      <Link to='/my-profile'><Icon name='user' />My profile</Link>
    </nav>
    <div id="burgerBtn">
      <a title="Burger button" id="openNavBtn" onClick={openNav}>&#9776;</a>
    </div>
    <div id="burgerNav" className="overlay">
      <a id="closeNavBtn" onClick={closeNav}>&times;</a>
      <nav className="overlay-content">
        <Link to='/my-inspirations'><Icon name='file' />My inspirations</Link>
        <Link to='/my-profile'><Icon name='user' />My profile</Link>
      </nav>
    </div>
  </header>

export default AdminHeader