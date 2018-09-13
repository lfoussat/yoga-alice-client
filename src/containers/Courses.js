import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Table } from 'semantic-ui-react'
import './Courses.css'
import { api } from '../api.js'

class Courses extends Component {

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
            <img src={`${api}/images/Yoga-Alice-cours.jpg`} alt="Cours de yoga d'Alice Olagnon" />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8} className="scrolled-text">
            <h1>Cours</h1>
              <p>Je propose un yoga intuitif et bienveillant,
              inspiré de mes différentes pratiques ( vinyasa, shiatsu, qi gong, mindfullness) </p>
              <p>Mes cours sont basés sur les principes fondamentaux de l'énergétique chinoise
              (adaptation de la pratique en fonction de l'heure de la journée, et de la saison)
              et soutenue par des exercices de méditation en pleine conscience. </p>
              <p>En alignant la pratique des asanas à celle de la méditation, chacun apprivoise peu à peu son corps,
              développe son intuition et son mouvement naturel. </p>
              <p>Mon envie ? Révéler l'intelligence naturelle de votre corps,
              et vous faire prendre conscience de vos possibilités infinies.</p>
            <h2>Les cours collectifs</h2>
              <Table basic='very' celled collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Horaire</Table.HeaderCell>
                    <Table.HeaderCell>Lieu</Table.HeaderCell>
                    <Table.HeaderCell>Tarif</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Lundi de 19h à 20h30</Table.Cell>
                    <Table.Cell>8 rue Petion, métro voltaire</Table.Cell>
                    <Table.Cell>18 euros (réservation obligatoire, 8 places)</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Mercredi de 10h45 à 11h45</Table.Cell>
                    <Table.Cell>15 rue Camille Desmoulin</Table.Cell>
                    <Table.Cell>10 euros (résa recommandée)</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Mercredi de 19h à 20h</Table.Cell>
                    <Table.Cell>8 rue Petion, métro voltaire</Table.Cell>
                    <Table.Cell>15 euros (réservation obligatoire)</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            <h2>Les cours à votre domicile (seul ou en petit groupe à vous de choisir, le prix est le même que vous soyez 1 ou 6)</h2>
              <p>Tarif :  1h : 70 euros</p>
              <p>Tarif :  1h30 : 90 euros</p>
              <p>Tarif à mon domicile : 1h : 55 euros</p>
            <h2>Les cours en entreprise</h2>
              <p>Les tarifs sont les mêmes.</p>
          </Grid.Column>
        </Grid>
      <Footer />
    </Container>
    )
  }
}

export default Courses
