import React from 'react'
import { Link } from '@reach/router'
import Logo from '../logo-alice.png'
import './Header.css'

const AuthHeader = () => (
  <header id="yogaAliceHeader">
    <div id="yogaAliceLogo">
      <img src={Logo} alt="logo Alice Ollagnon - yoga & shiatsu" />
      <Link to="">Alice Ollagnon</Link>
    </div>
  </header>
)

export default AuthHeader
