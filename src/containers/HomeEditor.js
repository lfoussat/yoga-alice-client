import React, { Component } from 'react'
import AdminHeader from '../components/AdminHeader.js'
import Footer from '../components/Footer.js'
import { Container, Form, Input, Button, Icon, Grid } from 'semantic-ui-react'
import './InspirationEditor.css'
import { actions } from '../store.js'
import { getHomeForBO, updateHome } from '../api.js' // sendNewImage
import { Link, Redirect } from '@reach/router'
import Bloc from '../components/Blocs.js'

const buttonStyle = {
  width: '160px',
  margin: '3px'
}

class HomeEditor extends Component {
  componentDidMount () {
    getHomeForBO().then(home => {
      console.log(home)
      actions.loadCarousel(home.carousel)
      actions.loadQuotations(home.quotations)
      actions.loadHomeBlocs(home.blocs)
      actions.loadContactHome(home.contact)
    })
  }

  handleChange = async (event, key, type) => { // index
    const { value, files } = event.target

    if (type === 'blocs') {
      // files treated in each bloc?
      actions.updateBlocs({ [key]: value })
    }

    if (files) {
      actions.updateInspiration({ [key]: files[0] })
    } else {
      actions.updateInspiration({ [key]: value })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const form = event.target

    const formData = new FormData()

    formData.append('draftImageUrl', this.props.inspiration.draftImageUrl)
    formData.append('draftTitle', this.props.inspiration.draftTitle)
    formData.append('draftDescription', this.props.inspiration.draftDescription)

    if (event.target.name.startsWith('isDraft')) { // send to save as draft
      formData.append('isDraft', true)

      updateHome(this.props.inspiration.id, formData)
        .then(() => window.location.reload())
    } else { // send to publish it
      formData.append('isDraft', false)

      updateHome(this.props.inspiration.id, formData)
        .then(() => window.location.reload())
    }
  }

  render () {
    if (!localStorage.token) return <Redirect noThrow to='/sign-in' />

    const { mySlides, quotations, contactHome, blocs } = this.props
    console.log(mySlides, quotations, contactHome, blocs[0])
    return (
      <Container fluid>
        <AdminHeader />
        <h1>Éditer la page d'accueil</h1>
        <Form id="edit_inspiration_Form" onSubmit={this.handleSubmit}>
          <Grid>
            {this.props.errors.missingElement ? <span style={{ color: 'red' }}>{this.props.errors.missingElement}</span> : ''}
            <Grid.Column mobile={16} tablet={16} computer={12}>
              <h2>Carousel</h2>
              <h2>Citation</h2>
              {blocs.filter(b => b.ref === 'about_me').map(b => <Bloc key={b.ref} bloc={b} headerTitle='mise en avant' />)}
              <h2>Bannière colorée</h2>
              <h2>Mosaique</h2>
              <h2>Avis</h2>
              <h2>Contact</h2>

            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={4}>
              <Input
                color='violet'
                icon='save'
                iconposition='left'
                type='submit'
                id="save_btn"
                name='isDraft'
                value='ENREGISTRER'
                onClick={this.handleSubmit}
                style={buttonStyle} /><br />
              <Input
                color='green'
                icon='paper plane'
                iconposition='left'
                type='submit'
                id="publish_btn"
                value='PUBLIER'
                style={buttonStyle} /><br />
              <Link to={`/`}>
                <Button color='blue' style={buttonStyle}><Icon name='eye' />Aperçu</Button>
              </Link><br />
            </Grid.Column>
          </Grid>
        </Form>
        <Footer />
      </Container>
    )
  }
}

export default HomeEditor
