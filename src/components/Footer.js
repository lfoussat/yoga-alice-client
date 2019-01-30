import React from 'react'
import { Link } from '@reach/router'
import { Icon } from 'semantic-ui-react'
import './Footer.css'

const Footer = () =>
  <section>
    <div id="yogaAliceFooter">
      <div id="socialMedia">
        <a href="https://www.facebook.com/alice.yoga.shiatsu/"><Icon name='facebook f' />Yoga Alice sur Facebook</a>
        <Link to="/contact"><Icon name='mail' />Contact</Link>
      </div>
      <div id="footerLinks">
        <Link to="/site-map">Plan du site</Link>
      </div>
      <div id="coyright">
        <p>Copyright 2018 : Alice Olagnon</p>
      </div>
    </div>
  </section>

export default Footer
