import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Icon } from 'semantic-ui-react'
import './Contact.css'

class Stages extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <section className="contactBackgroundStages">
          <h1>Stages</h1>
          <Grid>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              className="formulaire"
              id="contact-me"
            >
              <h2>Stage de printemps</h2>
              <h3>En normandie du 8 au 10 mars 2019</h3>
              <p>Du 8 au 10 mars à l’Arbre aux étoiles en Normandie.</p>
              <p>
                Une parenthèse d’un long weekend pour se ressourcer, et
                s’engager dans sa pratique du yoga, de la méditation et de
                l’exploration somatique.
              </p>
              <p>
                Toutes les infos, prix et réservation{' '}
                <a
                  href="https://www.larbreauxetoiles.fr/evenements/yoga-et-meditation-avec-alice-ollagnon-mars-2019/"
                  target="_blank"
                  className="contactLink"
                >
                  en cliquant ici
                </a>
                .
              </p>
              <p>
                <Icon name="facebook f" />
                Facebook :{' '}
                <a
                  href="https://www.facebook.com/alice.yoga.shiatsu/"
                  target="_blank"
                  className="contactLink"
                >
                  Yoga Alice
                </a>
              </p>
              <p>
                <Icon name="instagram" />
                Instagram :{' '}
                <a
                  href="https://www.instagram.com/aliceollagnon/"
                  target="_blank"
                  className="contactLink"
                >
                  aliceollagnon
                </a>
              </p>
              <p>
                <Icon name="mail" />
                Email :{' '}
                <a
                  href="mailto:alice.ollagnon@gmail.com"
                  className="contactLink"
                >
                  alice.ollagnon@gmail.com
                </a>
              </p>
            </Grid.Column>
          </Grid>
        </section>
        <Footer />
      </Container>
    )
  }
}

export default Stages
