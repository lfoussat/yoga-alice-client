import React, { Component } from 'react'
import InspirationCard from '../components/InspirationCard'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid } from 'semantic-ui-react'
import { getAllInspirations } from '../api.js'
import { actions } from '../store.js'
import './InspirationsDisplay.css'

class InspirationsDisplay extends Component {
  componentDidMount () {
    getAllInspirations()
      .then(actions.loadInspirations)
  }

  render () {
    return (
      <Container fluid>
        <Header />
        <h1>Inspirations</h1>
        <Grid doubling columns={4} id='inspiration-bloc'> {/* centered */}
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
