import React, { Component } from 'react'
import { Link } from '@reach/router'
import { Container } from 'semantic-ui-react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { actions } from '../store.js'
import { getAllInspirations } from '../api.js'
import '../containers/Contact.css'

class SiteMap extends Component {
  componentDidMount() {
    getAllInspirations('fo').then(actions.loadInspirations)
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <h1>Site Map</h1>
        <div style={{ margin: '3rem' }}>
          <ul>
            <li>
              <Link to="/" className="contactLink">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/yoga-alice" className="contactLink">
                Yoga Alice
              </Link>
            </li>
            <li>
              <Link to="/cours" className="contactLink">
                Cours
              </Link>
            </li>
            <li>
              <Link to="/shiatsu" className="contactLink">
                Shiatsu
              </Link>
            </li>
            <li>
              <Link to="/stages" className="contactLink">
                Stages
              </Link>
            </li>
            <li>
              <Link to="/inspirations" className="contactLink">
                Inspirations
              </Link>
              <ul>
                {this.props.inspirations
                  .sort((a, b) => b.createdAt - a.createdAt)
                  .map(i => (
                    <li>
                      <Link
                        to={`/inspirations/${i.id}`}
                        className="contactLink"
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <Link to="/contact" className="contactLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Footer />
      </Container>
    )
  }
}

export default SiteMap
