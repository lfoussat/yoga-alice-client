import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid } from 'semantic-ui-react'
import { api, getInspirationById } from '../api.js'
import { actions } from '../store.js'
import './InspirationDetail.css'

class InspirationDetail extends Component {
  componentDidMount () {
    getInspirationById(this.props.id, 'fo')
      .then(actions.loadInspiration)
  }

  render () {
    return (
      <Container fluid>
        <Header />
        <h1>{this.props.inspiration.title}</h1>
        <h2>{this.props.inspiration.smallDescription}</h2>
        <Grid>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={6}
            className="pPicture">
            <img
              alt={`${this.props.inspiration.title}`}
              src={`${api}/images/inspirations/${this.props.inspiration.imageUrl}`}/>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={10}
            className="pText">
            <p>{this.props.inspiration.description}</p>
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    )
  }
}

export default InspirationDetail
