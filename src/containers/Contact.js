import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Icon } from 'semantic-ui-react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <Container fluid>
        <Header />

        <section className="contactBackground">
          <h1>Contact</h1>
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8} className="formulaire" id="contact-me">
              <h2>Mes coordonnées</h2>
              <p>Si vous avez la moindre question concernant les cours, les stages, ou le shiatsu à me poser,
              n'hésitez pas à me contacter par email ou via Facebook. Je vous répondrai au plus vite.</p>
              <p><Icon name='facebook f' />Facebook : <a href="https://www.facebook.com/alice.yoga.shiatsu/" className='contactLink'>Yoga Alice</a></p>
              <p><Icon name='mail' />Email : <a href="mailto:alice.ollagnon@gmail.com" className='contactLink'>alice.ollagnon@gmail.com</a></p>
            </Grid.Column>
          </Grid>
        </section>
        <Footer />
      </Container>
    )
  }
}

export default Contact
