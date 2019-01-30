import React from 'react'
// import { Link } from '@reach/router'
import AuthForm from './AuthForm.js'
import AuthHeader from '../components/AuthHeader'
// import './styleError.css'

const SignIn = ({ onSubmit, errors }) => (
  <React.Fragment>
    <AuthHeader />
    <AuthForm
      onSubmit={onSubmit}
      headerMessage="Log-in to your account"
      actionName="Login"
    />
    {!errors.login ? (
      undefined
    ) : (
      <div className="ui message error centerError">{errors.login}</div>
    )}
  </React.Fragment>
)
// New to us? <Link to='/sign-up'>Sign Up</Link>

export default SignIn
