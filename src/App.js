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
import { getAllInspirations } from './api.js'

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
        <YogaAlice path='/yoga-alice' />
        <Courses {...this.state} path='/cours' />
        <Shiatsu path='/shiatsu' />
        <Stages path='/stages' />
        <InspirationsDisplay {...this.state} path='/inspirations' />
        <InspirationDetail {...this.state} path='/inspirations/:id' />
        <Contact path='/contact' />
      </Router>
    )
  }
}

export default App
