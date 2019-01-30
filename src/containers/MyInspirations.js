import React, { Component } from 'react'
import AdminInspirationCard from '../components/AdminInspirationCard'
import AdminHeader from '../components/AdminHeader.js'
import Footer from '../components/Footer.js'
import { Container, Grid, Modal, Form } from 'semantic-ui-react'
import { getAllInspirationsForBO, sendInspirationDb } from '../api.js'
import { actions } from '../store.js'
import { Link, navigate, Redirect } from '@reach/router'
import './MyInspirations.css'

class MyInspirations extends Component {
  componentDidMount() {
    getAllInspirationsForBO().then(actions.loadInspirations)
  }

  render() {
    if (!localStorage.token) return <Redirect noThrow to="/sign-in" />

    return (
      <React.Fragment>
        <Container fluid>
          <AdminHeader />
          <h1>My inspirations</h1>
          <Grid centered doubling columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Link to="new">
                  <div id="add_inspiration_bloc">
                    <h3>Ajouter une inspiration</h3>
                    <p id="add_inspiration_btn">+</p>
                  </div>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered doubling columns={4} id="inspiration-bloc">
            <Grid id="inspirations" style={{ paddingBottom: '120px' }}>
              {this.props.inspirations.length === 0
                ? 'No inspiration registered yet.'
                : this.props.inspirations.map(i => (
                    <AdminInspirationCard
                      key={i.id}
                      inspiration={i}
                      deleteInspiration={actions.deleteInspiration}
                      remove={this.props.remove}
                      selectedId={Number(this.props.id)}
                    />
                  ))}
            </Grid>
          </Grid>
          <Footer />
        </Container>
        <Modal
          open={this.props.new}
          onClose={() => navigate('/my-inspirations')}
        >
          <Modal.Header>Ajouter une nouvelle inspiration</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={async () => {
                const { id } = await sendInspirationDb(this.inspirationTitle)
                navigate(`/inspirations/form/${id}`)
              }}
            >
              <Form.Field required>
                <label>Titre : </label>
                <input
                  type="text"
                  required
                  onChange={e => {
                    this.inspirationTitle = e.target.value
                  }}
                />
                <input type="submit" className="ui button" value="Créer" />
              </Form.Field>
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}

export default MyInspirations
