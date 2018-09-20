import React from 'react'
import { Link, navigate } from '@reach/router'
import { Grid, Button, Modal, Icon, Header, Label } from 'semantic-ui-react'
import './AdminInspirationCard.css'

const buttonStyle = {
  width: '145px',
  margin: '3px'
}

const AdminInspirationCard = ({ inspiration, deleteInspiration, remove, selectedId }) =>
  <Grid.Column
    mobile={16}
    tablet={8}
    computer={4}
    className="inspiration"
    style={{ backgroundColor: `${inspiration.draftColor}` }}>
    {inspiration.isDraft
      ? <Label circular color='yellow'><Icon name='wrench' /></Label>
      : ''}
    {inspiration.publicationDate
      ? <Label circular color='olive'><Icon name='paper plane' /></Label>
      : ''}
    <Link to={`/inspirations/form/${inspiration.id}`}>
      <h2>{inspiration.draftTitle}</h2>
      <p>{inspiration.draftSmallDescription}</p>
    </Link>

    <div className="Btn">
      <Link to={`/inspirations/form/${inspiration.id}`} >
        <Button
          color='violet'
          style={buttonStyle}>
          <Icon name='edit' />Éditer
        </Button>
      </Link><br />
      <Link to={`/inspirations/${inspiration.id}`} >
        <Button
          color='blue'
          style={buttonStyle}>
          <Icon name='eye' />Aperçu
        </Button>
      </Link><br />
      <React.Fragment>
        <Link to={`${inspiration.id}/remove`}>
          <Button color='red' style={buttonStyle}>
            <Icon name='archive' />SUPPRIMER
          </Button>
        </Link>
        <Modal
          open={remove && inspiration.id === selectedId}
          basic
          size='small'
          onClose={() => navigate('/my-inspirations')}>
          <Header
            icon='archive'
            content={`Es-tu sure de vouloir supprimer cette inspiration "${inspiration.title}" ?`} />
          <Modal.Content>
            <p>Pour supprimer l'inspiration, clique sur 'Confirmer'. Sinon, clique sur 'Annuler'.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              inverted
              onClick={() => navigate('/my-inspirations')}>
              <Icon name='remove' /> Annuler
            </Button>
            <Button
              inverted
              color='red'
              onClick={() => {
                deleteInspiration(inspiration)
                navigate('/my-inspirations')
              }}>
              <Icon name='checkmark' /> Confirmer
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    </div>
  </Grid.Column>

export default AdminInspirationCard
