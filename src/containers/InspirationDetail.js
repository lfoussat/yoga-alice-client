import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Container, Grid } from 'semantic-ui-react'
import { getInspirationById } from '../api.js'
import './InspirationDetail.css'

class InspirationDetail extends Component {
  state = {
    inspiration: {}
  }

  componentDidMount() {
    getInspirationById(this.props.id).then(i => this.setState({ inspiration: i }))
  }

  render() {
    console.log(this.state.inspiration)
    return (
      <Container fluid>
        <Header />
        <h1>{this.state.inspiration.title}</h1>
        <h2>{this.state.inspiration.smallDescription}</h2>
        <Grid>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={6}
            className="pPicture">
            <img alt={`${this.state.inspiration.title}`} src={`${this.state.inspiration.imageUrl}`}/></Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={10} className="pText"><p>{this.state.inspiration.description}</p></Grid.Column>
        </Grid>
        <Footer />
      </Container>
    )
  }
}

export default InspirationDetail
