import React, { Component } from 'react'
import { Router } from '@reach/router'
import { store } from './store.js'
import Home from './containers/Home.js'
import InspirationsDisplay from './containers/InspirationsDisplay.js'
import InspirationDetail from './containers/InspirationDetail.js'
import YogaAlice from './containers/YogaAlice.js'
import Courses from './containers/Courses.js'
import Shiatsu from './containers/Shiatsu.js'
import Stages from './containers/Stages.js'
import Contact from './containers/Contact.js'
import MyInspirations from './containers/MyInspirations.js'
import InspirationEditor from './containers/InspirationEditor.js'
import HomeEditor from './containers/HomeEditor.js'
import Authentication from './containers/Authentication.js'
import MyProfile from './containers/MyProfile.js'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    console.log(this.state.inspirations)
    console.log(this.state.inspiration)
    return (
      <Router>
        <Home {...this.state} path='/' />
        <YogaAlice {...this.state} path='/yoga-alice' />
        <Courses {...this.state} path='/cours' />
        <Shiatsu {...this.state} path='/shiatsu' />
        <Stages {...this.state} path='/stages' />
        <InspirationsDisplay {...this.state} path='/inspirations' />
        <InspirationDetail {...this.state} path='/inspirations/:id' />
        <Contact {...this.state} path='/contact' />
        <MyInspirations {...this.state} path='/my-inspirations' />
        <MyInspirations {...this.state} remove path='/my-inspirations/:id/remove' />
        <MyInspirations {...this.state} new path='/my-inspirations/new' />
        <InspirationEditor {...this.state} path='/inspirations/form/:id' />
        <HomeEditor {...this.state} path='/edit/home' />
        <Authentication {...this.state} path='/sign-in' />
        <Authentication {...this.state} signUp path='/sign-up' />
        <MyProfile {...this.state} path='/profile' />
      </Router>
    )
  }
}

export default App
