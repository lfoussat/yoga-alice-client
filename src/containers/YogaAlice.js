import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Button, Icon } from 'semantic-ui-react'
import './Courses.css'
import { Link } from '@reach/router'
import { api } from '../api.js'

class YogaAlice extends Component {

  render() {
    return (
      <Container fluid>
        <Header />

        <Grid>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="fixed-picture">
            <img src={`${api}/images/cours-couleur.jpg`} alt="Yoga Alice" />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8} className="scrolled-text">
            <h1>Yoga Alice</h1>
            <p>Bonjour, je m’appelle Alice. Je suis professeur de yoga certifiée et praticienne en shiatsu traditionnel.</p>
            <p>Je propose des cours de yoga en groupe ou en individuel,
            des soins shiatsus et des accompagnement holistique dans la gestion du stress. </p>
            <p>Après plusieurs années de pratique personnelle auprès de Mohammed Ismael
            (<a href='http://www.yogainparis.com/' target='_blank' rel="noopener noreferrer">http://www.yogainparis.com/</a>),
            je me suis formée comme professeur chez Stillflowing yoga auprès de Gemma Mallol
            (<a href='http://www.stillflowingyogateachertraining.com' target='_blank' rel="noopener noreferrer">http://www.stillflowingyogateachertraining.com</a>) en 2015.</p>
            <p>Je suis diplômé en shiatsu traditionnel de l'école de Bernard Bouheret,
            je pratique assidûment la méditation et le gi gong. </p>
            <p><Link to='/cours' className='contactLink'>En savoir plus sur mes cours</Link><br/>
            <Link to='/shiatsu' className='contactLink'>En savoir plus sur le shiatsu</Link><br/>
            <Link to='/stages' className='contactLink'>Découvrir les stages</Link><br/></p>
            <Button className='contactButton'><Icon name='mail' />Me contacter par email</Button>
          </Grid.Column>
        </Grid>
      <Footer />
    </Container>
    )
  }
}

export default YogaAlice
