import React from 'react'
import SignIn from '../components/SignIn.js'
// import SignUp from '../components/SignUp.js'
import { Redirect, navigate } from '@reach/router'
import { sendLogin } from '../api' // sendSignUp
import { actions } from '../store'

const getFormBody = event => {
  event.preventDefault()
  return [...event.target]
    .filter(input => input.name)
    .reduce((acc, { value, name }) => {
      acc[name] = value
      return acc
    }, {})
}

// const signUp = event => {
//   sendSignUp(getFormBody(event)).then(({ token, email, error }) => {
//     if (error) {
//       actions.showError('signup', error)
//     } else {
//       localStorage.token = token || ''
//       localStorage.email = email || ''
//       actions.updateProfile(email)
//       navigate('/my-inspirations')
//     }
//   })
// }

const login = event => {
  sendLogin(getFormBody(event)).then(({ token, email, error }) => {
    if (error) {
      actions.showError('login', error)
    } else {
      localStorage.token = token || ''
      localStorage.email = email || 'test'
      actions.updateProfile(email)
      navigate('/my-inspirations')
    }
  })
}

const Authentication = props => {
  if (localStorage.token) return <Redirect noThrow to="/my-inspirations" />
  // if (props.signUp) {
  //   return <SignUp onSubmit={signUp} {...props} />
  // }
  return <SignIn onSubmit={login} {...props} />
}

export default Authentication
