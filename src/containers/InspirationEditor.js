import React, { Component } from 'react'
import AdminHeader from '../components/AdminHeader.js'
import Footer from '../components/Footer.js'
import { Container, Form, Input, Button, Icon, Grid } from 'semantic-ui-react'
import './InspirationEditor.css'
import { actions } from '../store.js'
import { api, getInspirationById, updateInspiration } from '../api.js' // sendNewImage
import { formatedDate } from '../FormatedDate.js'
import { Link } from '@reach/router'

const buttonStyle = {
  width: '160px',
  margin: '3px'
}

class InspirationEditor extends Component {
  componentDidMount () {
    getInspirationById(this.props.id, 'bo')
      .then(inspiration => {
        actions.loadInspiration(inspiration)
        actions.loadCurrentImageUrl(inspiration.draftImageUrl)
      })
  }

  handleChange = async (event, key) => {
    const { value, files } = event.target

    if (files) {
      actions.updateInspiration({ [key]: files[0] })
    } else if (key === 'draftColor') {
      const colorSelected = document.querySelector('input[name=inspiration_colors]:checked').id

      actions.updateInspiration({ [key]: colorSelected })
    } else {
      actions.updateInspiration({ [key]: value })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const form = event.target

    if (this.props.inspiration.draftTitle === '') {
      actions.showError('missingElement', '* Il faut renseigner un titre !')
    } else if (this.props.inspiration.draftSmallDescription === '') {
      actions.showError('missingElement', '* Il faut renseigner une description courte !')
    } else if (this.props.inspiration.draftDescription === '') {
      actions.showError('missingElement', '* Il faut renseigner un contenu !')
    } else {
      const formData = new FormData()
      const colorSelected = this.props.inspiration.draftColor

      formData.append('draftColor', colorSelected)
      formData.delete('inspiration_colors')
      formData.append('draftImageUrl', this.props.inspiration.draftImageUrl)
      formData.append('draftTitle', this.props.inspiration.draftTitle)
      formData.append('draftSmallDescription', this.props.inspiration.draftSmallDescription)
      formData.append('draftDescription', this.props.inspiration.draftDescription)

      if (event.target.name.startsWith('isDraft')) { // send to save as draft
        formData.append('isDraft', true)

        updateInspiration(this.props.inspiration.id, formData)
          .then(() => window.location.reload())
      } else { // send to publish it
        formData.append('isDraft', false)

        updateInspiration(this.props.inspiration.id, formData)
          .then(() => window.location.reload())
      }
    }
  }

  render () {
    const inspiration = this.props.inspiration
    return (
      <Container fluid>
        <AdminHeader />
        <h1>Éditer l'inspiration</h1>
        <Form id="edit_inspiration_Form" onSubmit={this.handleSubmit}>
          <Grid>
            {this.props.errors.missingElement ? <span style={{ color: 'red' }}>{this.props.errors.missingElement}</span> : ''}
            <Grid.Column mobile={16} tablet={16} computer={12}>
              <label>Titre :<br />
                <Input
                  type="text"
                  id="inspiration_title"
                  name="title"
                  maxLength='64'
                  wrap='hard'
                  placeholder="Tapez votre titre ici"
                  value={`${inspiration.draftTitle}`}
                  onChange={event => this.handleChange(event, 'draftTitle')} />
                {inspiration.draftTitle === '' ? <span style={{ color: 'red' }}>* Il faut renseigner un titre !</span> : ''}
              </label><br />
              <label>
                <p>Date de création : {formatedDate(inspiration.createdAt)}</p>
              </label>
              <label>
                <p>Dernière modification : {formatedDate(inspiration.modificationDate)}</p>
              </label>
              <label>
                <p>Date de publication : {inspiration.publicationDate !== null
                  ? formatedDate(inspiration.publicationDate)
                  : `Cet article n'est pas encore publié.`}</p>
              </label><br />
              <label>Description courte :<br />
                <Input
                  type="text"
                  id="inspiration_small_description"
                  maxLength='254'
                  wrap='hard'
                  name="smallDescription"
                  placeholder="Tapez votre en tête ici"
                  value={`${inspiration.draftSmallDescription}`}
                  onChange={event => this.handleChange(event, 'draftSmallDescription')} />
                {inspiration.draftSmallDescription === '' ? <span style={{ color: 'red' }}>* Il faut renseigner une en-tête !</span> : ''}
              </label><br />
              <label>Description :<br />
                <textarea
                  type="text"
                  id="inspiration_description"
                  name="description"
                  placeholder="Tapez votre contenu ici"
                  value={`${inspiration.draftDescription}`}
                  onChange={event => this.handleChange(event, 'draftDescription')} />
                {inspiration.draftDescription === '' ? <span style={{ color: 'red' }}>* Il faut renseigner un contenu !</span> : ''}
              </label><br />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={4}>
              <label>Image :<br />
                <img
                  className="thumbnailPic"
                  style={{ width: '200px', height: '200px', marginTop: '10px' }}
                  src={`${api}/images/inspirations/${this.props.currentImageUrl}`}
                  alt={inspiration.draftTitle} /><br />
                <Input
                  id="edit_inspiration_image"
                  type="file"
                  accept='image/*'
                  name='draftImageUrl'
                  onChange={event => this.handleChange(event, 'draftImageUrl')} />
              </label><br />
              <label>Couleur de mise en avant :<br />
                <input
                  type="radio"
                  id="#c1eeff"
                  name="inspiration_colors"
                  checked={inspiration.draftColor === '#c1eeff'}
                  onChange={event => this.handleChange(event, 'draftColor')} />
                <label htmlFor='#c1eeff'><span id='blue'></span>Bleue</label>
                <input
                  type="radio"
                  id="#D3F6DB"
                  name="inspiration_colors"
                  checked={inspiration.draftColor === '#D3F6DB'}
                  onChange={event => this.handleChange(event, 'draftColor')} />
                <label htmlFor='#D3F6DB'><span id='green'></span>Vert</label>
                <input
                  type="radio"
                  id="#f1f7ed"
                  name="inspiration_colors"
                  checked={inspiration.draftColor === '#f1f7ed'}
                  onChange={event => this.handleChange(event, 'draftColor')} />
                <label htmlFor='#f1f7ed'><span id='beige'></span>Beige</label>
              </label><br />
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
              <Link to={`/inspirations/${inspiration.id}`}>
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

export default InspirationEditor
