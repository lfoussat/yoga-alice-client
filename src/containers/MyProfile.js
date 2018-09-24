import React from 'react'
import { Button, Form, Grid, Container } from 'semantic-ui-react'
import AdminHeader from '../components/AdminHeader.js'
import './MyProfile.css'
import { actions } from '../store.js'
import { sendSignUp } from '../api.js'

const getFormBody = event => {
  event.preventDefault()
  return [...event.target]
    .filter(input => input.name)
    .reduce((acc, { value, name }) => {
      acc[name] = value
      return acc
    }, {})
}

const updateProfile = (event) => {
  sendSignUp(getFormBody(event))
    .then(({ token, email, error }) => {
      if (error) {
        actions.showError('profile', error)
      } else {
        localStorage.token = token || ''
        if (email) { localStorage.email = email || '' }
        actions.updateProfile(email)
        actions.showError('profile', 'Your profile is updated !')
      }
    })
}

const MyProfile = ({ profile, errors }) => {
  let email = ''

  return (
    <Container fluid>
      <AdminHeader />
      <Grid centered style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 650 }}>
          <h1>
            My profile
          </h1>
          <Form id='editProfile' className='ui form' size='large' onSubmit={(e) => {
            if (e.target.password.value !== e.target.passwordBis.value) {
              actions.showError('profile', 'Please write the same password')
            } else {
              updateProfile(e)
            }
          }}>
              <div className='field'>
                <label>E-mail adress</label>
                <Form.Input
                  name='email'
                  fluid
                  icon='user'
                  iconPosition='left'
                  type='email'
                  value={profile.email || ''}
                  onChange={e => {
                    email = e.target.value
                    actions.updateProfile(email)
                  }}
                />
              </div>
              <div className='field'>
                <label> Password </label>
                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Type your password'
                  type='password'
                  minLength='6'
                  maxLength='18'
                />
              </div>
              <div className='field'>
                <label>Confirm your password</label>
                <Form.Input
                  fluid
                  name='passwordBis'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm your password'
                  type='password'
                  minLength='6'
                  maxLength='18'
                />
              </div>
              <Button fluid size='large'>
                Save Changes
              </Button>
              { errors.profile ? <div className='ui message'>{errors.profile}</div> : undefined }
          </Form>
        </Grid.Column>
      </Grid>
      </Container>
  )
}

export default MyProfile
