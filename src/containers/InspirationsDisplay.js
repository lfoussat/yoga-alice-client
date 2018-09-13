import React, { Component } from 'react'
import InspirationCard from '../components/InspirationCard'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid } from 'semantic-ui-react'
import './InspirationsDisplay.css'

class InspirationsDisplay extends Component {

  render() {
    return (
      <Container fluid>
        <Header />
        <h1>Inspirations</h1>
        <Grid centered doubling columns={4} id='inspiration-bloc'>
          <Grid id="inspirations">
            {this.props.inspirations.map(i => <InspirationCard inspiration={i} key={i.id} />)}
          </Grid>
        </Grid>
        <Footer />
      </Container>
    )
  }
}

export default InspirationsDisplay
