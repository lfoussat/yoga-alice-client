import React from 'react'
import { Link } from '@reach/router'
import { Icon } from 'semantic-ui-react'
import './Footer.css'

const Footer = () => (
  <section>
    <div id="yogaAliceFooter">
      <div id="socialMedia">
        <a
          href="https://www.facebook.com/alice.yoga.shiatsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook f" />
          Yoga Alice sur Facebook
        </a>
        <a
          href="https://www.instagram.com/aliceollagnon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" />
          aliceollagnon sur Instagram
        </a>
        <Link to="/contact">
          <Icon name="mail" />
          Contact
        </Link>
      </div>
      <div id="footerLinks">
        <Link to="/site-map">Plan du site</Link>
      </div>
      <div id="coyright">
        <p>
          Copyright 2019 : Alice Ollagnon - Développement web : Louise Foussat
        </p>
      </div>
    </div>
  </section>
)

export default Footer
