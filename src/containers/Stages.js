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
            <Grid.Column mobile={16} tablet={16} computer={8} className="formulaire" id="contact-me">
              <h2>Stage d'automne</h2>
              <h3>En normandie du 28 au 30 septembre 2018</h3>
              <p>Je vous propose de nous retrouver en tout petit groupe (10 personnes max) pour un long weekend en Normandie,
               afin de vivre une transition toute douce vers l'énergie de l'automne.</p>
              <p>Nous serons logés confortablement aux Gîtes du Lodge à 30 min d’Honfleur :
              <a href='https://www.lelodge-saint-thurien.com/' className='contactLink' target='_blank' rel="noopener noreferrer">
              https://www.lelodge-saint-thurien.com/</a></p>
              <ul>
                <li>Tarif en chambre partagée : 300 en pension complète</li>
                <li>Tarif en chambre seule : 340 euros</li>
                <li>shiatsu (avec réservation à l'avance) : 50 euros</li>
                <li>Possibilité de paiement en plusieurs fois.</li>
              </ul>
              <p>150 euros d'acompte non remboursable sont nécessaire pour valider votre inscription.</p>
              <p><Icon name='facebook f' />Facebook : <a href="https://www.facebook.com/alice.yoga.shiatsu/" className='contactLink'>Yoga Alice</a></p>
              <p><Icon name='mail' />Email : <a href="mailto:alice.ollagnon@gmail.com" className='contactLink'>alice.ollagnon@gmail.com</a></p>
              <h2>Stage de printemps</h2>
              <h3>En normandie du 8 au 10 mars 2019</h3>
              <p>Infos à venir, mais pré-réservation déjà ouvertes.</p>
            </Grid.Column>
          </Grid>
        </section>
        <Footer />
      </Container>
    )
  }
}

export default Stages
