import React from 'react'
import { Link } from '@reach/router'
import AuthForm from './AuthForm'
import AuthHeader from '../components/AuthHeader'

const SignUp = ({ onSubmit, errors }) => (
  <React.Fragment>
    <AuthHeader />
    <AuthForm
      onSubmit={onSubmit}
      headerMessage='Hi, Sign up to create your own, personnal and free for ever account'
      actionName='Sign Up'>
      Already a member? <Link to='/sign-in'>Sign In</Link>
    </AuthForm>
    {errors.signup ? <div className='ui message error centerError'>{errors.signup}</div> : undefined }

  </React.Fragment>
)

export default SignUp
