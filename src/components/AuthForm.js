import React from 'react'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'

const AuthForm = ({ headerMessage, actionName, onSubmit, error, children }) => (
  <div className='AuthForm'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2 style={{ marginTop: '125px'}}>
          {headerMessage}
        </h2>
        <Form size='large' onSubmit={onSubmit}>
          <Segment stacked>
            <Form.Input name='email' type='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              name='password'
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              minLength='6'
              maxLength='18'
            />
            <Button fluid size='large'>
              {actionName}
            </Button>
          </Segment>
        </Form>
        <Message negative={Boolean(error)}>
          {error || children}
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default AuthForm
