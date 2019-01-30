import React from 'react'
import { Button, Form, Grid, Message } from 'semantic-ui-react'

const AuthForm = ({ headerMessage, actionName, onSubmit, error, children }) => (
  <div className='AuthForm'>
    <Grid centered style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1>
          {headerMessage}
        </h1>
        <Form size='large' onSubmit={onSubmit}>
          <Form.Input
            name='email'
            type='email'
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail address' />
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
        </Form>
        <Message negative={Boolean(error)}>
          {error || children}
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default AuthForm
