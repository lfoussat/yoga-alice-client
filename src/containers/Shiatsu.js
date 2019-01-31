import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Table, Button, Icon } from 'semantic-ui-react'
import './Yoga.css'
import { api } from '../api.js'

class Shiatsu extends Component {
  render () {
    return (
      <Container fluid>
        <Header />
        <Grid>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="fixed-picture"
          >
            <img src={`${api}/images/foret-shiatsu.jpg`} alt="Shiatsu" />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="scrolled-text"
          >
            <h1 style={{ paddingTop: '110px' }}>Shiatsu</h1>
            <p>
              J’ai été formée au shiatsu auprès de Bernard Bouheret, directeur
              de l’école de shiatsu thérapeutique de Paris.
            </p>
            <p>
              Je vous reçois donc à mon domicile, 60 euros la séance de shiatsu
              (prévoyez 1h30 sur place).
            </p>
            <p>
              Je me déplace en entreprise pour la journée, soit seule soit avec
              une autre praticienne. Nous pouvons recevoir de 6 à 12
              collaborateurs par jour.
            </p>
            <p>Me contacter pour obtenir un devis.</p>
            <p>
              Le shiatsu est une technique manuelle japonaise favorisant la
              bonne circulation énergétique dans le corps. Il est
              particulièrement recommandé en cas :
            </p>
            <ul>
              <li>Prévenir l’anxiété, stress</li>
              <li>Soulager les maux de dos, tensions</li>
              <li>Soutenir le corps en cas de fatigue, épuisement</li>
              <li>Prévenir les troubles du sommeil</li>
              <li>Prévenir les maux digestifs</li>
            </ul>
            <h2>Mes disponibilités</h2>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Horaire</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Lundi de 10h à 18h</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jeudi de 15h à 20h</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Vendredi de 10h à 19h</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Samedi de 14h à 17h</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <p>
              N’hésitez pas à me poser vos questions sur le shiatsu par mail,
              j’y répondrai avec grand plaisir.
            </p>
            <Button className="contactButton">
              <Icon name="mail" />
              Me contacter par email
            </Button>
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    )
  }
}

export default Shiatsu
